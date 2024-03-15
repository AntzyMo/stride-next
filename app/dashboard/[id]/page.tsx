import { getTask } from '@/database'
import ProductTable from './ProductTable'

export default async function Dashboard({ params }: { params: { id: string } }) {
  console.log('params', params)
  const task = await getTask(params.id)
  console.log('task', task)
  return (
    <ProductTable data={task}/>
  )
}
