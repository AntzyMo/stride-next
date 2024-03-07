import Table from '@/components/Table'

export default function Dashboard({ params }: { params: { slug: string } }) {
  console.log('params', params)
  return (
    <Table/>
  )
}
