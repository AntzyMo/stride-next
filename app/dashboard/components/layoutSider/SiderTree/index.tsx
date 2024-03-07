'use client'
import type { Task } from '@/components/Table/types'
import type { ColumnDef } from '@tanstack/react-table'

import Table from '@/components/Table/table'

const defaultData: Task[] = [
  {
    title: '1111测试代办',
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

const columns: ColumnDef<Task>[] = [
  {
    id: 'title',
    accessorFn: row => row.title
  }
]

export default function SiderTree() {
  return (
    <Table columns={columns} data={defaultData}>
      <div>123</div>
    </Table>
  )
}
