'use client'
import type { Task } from './types'
import type { ColumnDef } from '@tanstack/react-table'

import Table from './table'
import TableBody from './tableBody'
import TableFooter from './tableFooter'
import TableHeader from './tableHeader'
import { categoryRender, titleRender } from './components'

const defaultData: Task[] = [
  {
    title: '测试代办',
    category: '进行中',
    isEdit: false,
    children: [
      {
        title: '测试测试测试从是',
        category: '进行中',
        isEdit: false,
        children: [
          {
            title: '自己3',
            category: '测试中',
            isEdit: false
          }
        ]
      },
      {
        title: 'cscscscs',
        isEdit: false,
        category: '测试中'

      }
    ]
  },
  {
    title: '测试代办111',
    category: '未开始',
    isEdit: false,
    children: [
      {
        title: 'css',
        isEdit: false,
        category: '进行中'

      }

    ]
  }
]

export default function TableTree() {
  const columns: ColumnDef<Task>[] = [
    {
      header: '计划',
      accessorFn: row => row.title,
      size: 450,
      cell: cellData => titleRender(cellData)
    },
    {
      header: '状态',
      accessorFn: row => row.category,
      size: 200,
      cell: cellData => categoryRender(cellData)
    }
  ]
  return (
    <Table columns={columns} data={defaultData}>
      <TableHeader/>
      <TableBody/>
      <TableFooter/>
    </Table>
  )
}
