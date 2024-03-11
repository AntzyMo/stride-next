import { flexRender } from '@tanstack/react-table'

import type { Task } from './types'
import type { Cell } from '@tanstack/react-table'

interface TableBodyProps {
  col: Cell<Task, unknown>
}
export default function TableBody(props: TableBodyProps) {
  const { col } = props
  return (
    <div
      className='flex items-center'
      key={col.id}
      style={{
        width: col.column.getSize()
      }}
    >
      {
        flexRender(
          col.column.columnDef.cell,
          col.getContext()
        )
      }
    </div>
  )
}
