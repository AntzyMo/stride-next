import { type Header, flexRender } from '@tanstack/react-table'
import type { Task } from './types'

import { cn } from '@/lib/utils'

interface TableHeaderProps {
  header: Header<Task, unknown>
}
export default function TableHeader(props: TableHeaderProps) {
  const { header } = props
  return (
    <div
      className='relative'
      key={header.id}
      style={{
        width: header.getSize()
      }}>
      {
        flexRender(
          header.column.columnDef.header,
          header.getContext()
        )
      }
      <div className='w-[1px] bg-gray-200 h-full absolute top-0 right-0 hidden group/headerItem group-hover/header:block'>
        <div
          className={cn('w-1  rounded-sm h-6 cursor-col-resize group-hover/headerItem:bg-black/80')}
          onDoubleClick={() => header.column.resetSize()}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
        />
      </div>
    </div>
  )
}
