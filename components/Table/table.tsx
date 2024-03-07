'use client'
import { useState } from 'react'
import { getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'

import type { Task } from './types'
import type { ColumnDef } from '@tanstack/react-table'

import { TableProvider } from '@/contexts/TableProvider'

export interface TableProps {
  data: Task[]
  columns: ColumnDef<Task>[]
}

export default function Table({ data = [], columns, children }: React.PropsWithChildren<TableProps>) {
  const [tableData, setTableData] = useState<Task[]>(JSON.parse(JSON.stringify(data)))

  const table = useReactTable({
    columns,
    data: tableData,
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    getSubRows: originalRow => originalRow?.children,
    getRowCanExpand: row => row.subRows.length > 0,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugAll: true
  })

  return (
    <TableProvider value={{
      table,
      tableData,
      setTableData
    }}>
      <div className='overflow-hidden select-none'>
        { children }
      </div>
    </TableProvider>
  )
}
