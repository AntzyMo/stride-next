'use client'
import { useState } from 'react'

import type { Task } from './types'
import type { ColumnDef } from '@tanstack/react-table'

import Button from '@/components/Button'
import RcTable from '@/components/RcTable'

import TableBody from './TableBody'
import { createRow } from './helper'
import TableHeader from './TableHeader'
import { Category, Title } from './columns'
import MingcuteAddFill from '~icons/mingcute/add-fill'
import TableItem from '@/app/dashboard/[id]/ProductTable/TableItem'

interface ProductTableProps {
  data: Task[]
}
export default function ProductTable({ data }: ProductTableProps) {
  const [tableData, setData] = useState(JSON.parse(JSON.stringify(data)))

  const addRow = () => {
    setData([...tableData, createRow()])
  }

  const delLastRow = () => {
    const deletedLastRows = tableData.slice(0, -1)
    setData(deletedLastRows)
  }

  const columns: ColumnDef<Task>[] = [
    {
      header: '计划',
      accessorFn: row => row.title,
      size: 450,
      cell: cell => <Title {...cell} onBlur={delLastRow} />
    },
    {
      header: '状态',
      accessorFn: row => row.category,
      size: 200,
      cell: cell => <Category {...cell} />
    }
  ]

  return (
    <RcTable
      bodyRender={col => <TableBody col={col} />}
      columns={columns}
      data={tableData}
      headerRender={header => <TableHeader header={header} />}
      footerRender={(
        <TableItem className='hover:bg-transparent ml-4 mt-1'>
          <Button className='rounded-md' onClick={addRow}>
            <div className='w-4 h-4 flex items-center justify-center rounded border-2  border-primary50'>
              <MingcuteAddFill className='w-2.5 h-2.5'/>
            </div>
            <span>增加一条计划吧 (´,,•∀•,,`)</span>
          </Button>
        </TableItem>
      )}
    />
  )
}
