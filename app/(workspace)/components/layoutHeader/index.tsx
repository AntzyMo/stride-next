import Button from '@/components/Button'
import Tooltip from '@/components/Tooltip'

import { cn } from '@/lib/utils'
import MingcuteLayoutLeftbarOpenLine from '~icons/mingcute/layout-leftbar-open-line'

interface LayoutHeaderProps {
  className?: string
}
export default function LayoutHeader({ className }: LayoutHeaderProps) {
  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className='flex items-center gap-3'>
        <Tooltip
          tirgger={
            <Button icon={<MingcuteLayoutLeftbarOpenLine/>} />
          }>
          展开
        </Tooltip>
        <div>title</div>
      </div>
      <div>right</div>
    </div>
  )
}
