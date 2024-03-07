import Button from '../Button'
import TableItem from './tableItem'
import { useTableContext } from '@/contexts'
import MingcuteAddFill from '~icons/mingcute/add-fill'

export default function TableFooter() {
  const { addTask } = useTableContext()

  return (
    <TableItem itemClasss='hover:bg-transparent ml-4 mt-1'>
      <Button className='rounded-md' onClick={addTask}>
        <div className='w-4 h-4 flex items-center justify-center rounded border-2  border-primary50'>
          <MingcuteAddFill className='w-2.5 h-2.5'/>
        </div>
        <span>增加一条计划吧 (´,,•∀•,,`)</span>
      </Button>
    </TableItem>
  )
}
