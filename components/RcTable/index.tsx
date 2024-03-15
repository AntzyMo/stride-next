'use client'
import { Fragment, type ReactNode } from 'react'
import { getCoreRowModel, getExpandedRowModel, useReactTable } from '@tanstack/react-table'
import type { Cell, ColumnDef, Header, Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import TableItem from '../../app/dashboard/[id]/ProductTable/TableItem'

export interface RcTableProps<T> {
  columns: ColumnDef<T>[]
  data: T[]
  headerRender?: (header: Header<T, unknown>) => ReactNode
  bodyRender?: (col: Cell<T, unknown>) => ReactNode
  footerRender?: ReactNode

}

function rcHeaderRender<T>(headerRender: RcTableProps<T>['headerRender'], table: Table<T>) {
  const [headerData] = table.getHeaderGroups()

  if (headerRender) {
    return (
      <div className={cn('flex text-sm gap-3 py-1 ml-2.5 pl-6 group/header')}>
        {
          headerData.headers.map(header => (
            <Fragment key={header.id}>
              { headerRender?.(header) }
            </Fragment>
          ))
        }
      </div>
    )
  }

  return null
}

function rcBodyRender<T>(bodyRender: RcTableProps<T>['bodyRender'], table: Table<T>) {
  const rowData = table.getRowModel()

  if (bodyRender) {
    return (
      rowData.rows.map(row => (
        <TableItem childrenDepth={row.depth} key={row.id}>
          {
            row.getVisibleCells().map(col => {
              return (
                <Fragment key={col.id}>
                  { bodyRender?.(col) }
                </Fragment>
              )
            })
          }
        </TableItem>
      ))
    )
  }
  return null
}

export default function RcTable<T>(props: React.PropsWithChildren<RcTableProps<T>>) {
  const { data, columns, headerRender, bodyRender, footerRender } = props

  const table = useReactTable({
    columns,
    data,
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    getSubRows: originalRow => originalRow?.children,
    getRowCanExpand: row => row.subRows.length > 0,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel()
  })

  return (
    <div className='overflow-hidden select-none'>
      { rcHeaderRender(headerRender, table) }
      { rcBodyRender(bodyRender, table) }
      { footerRender }
    </div>
  )
}
