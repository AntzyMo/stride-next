'use client'
import { flexRender } from '@tanstack/react-table'

import { cn } from '@/lib/utils'
import { useTableContext } from '@/contexts'

export default function TableHeader() {
  const { table } = useTableContext()
  const [headerData] = table.getHeaderGroups()

  return (
    <div className='flex text-sm gap-3 py-1 ml-2.5 pl-6 group/header'>
      {
        headerData.headers.map(header => (
          <div
            className='relative '
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
                className={cn('w-1  rounded-sm h-6 cursor-col-resize group-hover/headerItem:bg-black/80', table.options.columnResizeDirection)}
                onDoubleClick={() => header.column.resetSize()}
                onMouseDown={header.getResizeHandler()}
                onTouchStart={header.getResizeHandler()}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}
