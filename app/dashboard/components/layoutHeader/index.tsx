import { cn } from '@/lib/utils'
import SiderCollapsed from './SiderCollapsed'

interface LayoutHeaderProps {
  className?: string
}
export default function LayoutHeader({ className }: LayoutHeaderProps) {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className='flex items-center gap-1'>
        <SiderCollapsed/>
        <div>title</div>
      </div>
      <div>
        right
      </div>
    </div>
  )
}
