import { cn } from '@/lib/utils'

interface TableItemProps {
  childrenDepth?: number
  className?: string
}
export default function TableItem({ children, childrenDepth = 0, className }: React.PropsWithChildren<TableItemProps>) {
  return (
    <div>
      <div className='h-[1px] w-full bg-gray-200/50 ml-2.5' style={{ transform: `translateX(${(childrenDepth + 1) * 20}px)` }}/>
      <div className={cn('flex text-sm text-black/90 gap-8 hover:bg-gray-100 rounded-lg pl-2.5 group/table-body-item', className)}>
        { children }
      </div>
    </div>
  )
}
