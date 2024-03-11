import type { Task } from './ProductTable/types'

import ProductTable from './ProductTable'

const defaultData: Task[] = [
  {
    title: 'pro测试代办',
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

export default function Dashboard({ params }: { params: { slug: string } }) {
  console.log('params', params)
  return (
    <ProductTable data={defaultData}/>
  )
}
