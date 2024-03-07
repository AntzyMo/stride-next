import { zhCN } from 'date-fns/locale'
import { addMonths, format, subMonths } from 'date-fns'
import type { CaptionProps } from 'react-day-picker'

import MingcuteLeftFill from '~icons/mingcute/left-fill'
import MingcuteRightFill from '~icons/mingcute/right-fill'

import Button from '@/components/Button'

type MonthChangeType = 'next' | 'prev'

interface YearRenderProps extends CaptionProps {
  onMonthChange: (date: Date) => void
}

export default function YearRender(props: YearRenderProps) {
  const { onMonthChange, displayMonth } = props

  const onChange = (type: MonthChangeType) => {
    const month = type === 'next' ? addMonths(displayMonth, 1) : subMonths(displayMonth, 1)
    onMonthChange(month)
  }

  return (
    <div className='flex justify-between items-center mb-2 px-1.5' >
      <div className='text-[10px] font-medium'>{ format(displayMonth, 'yyyy 年 M 月', { locale: zhCN }) }</div>
      <div className='flex gap-'>
        <Button className='w-5 h-5 hoverItem p-1' onClick={() => onChange('prev')}>
          <MingcuteLeftFill className="icon text-[10px]"/>
        </Button>

        <Button className='w-5 h-5 hoverItem p-1' onClick={() => onChange('next')}>
          <MingcuteRightFill className="icon text-[10px]"/>
        </Button>

      </div>
    </div>
  )
}
