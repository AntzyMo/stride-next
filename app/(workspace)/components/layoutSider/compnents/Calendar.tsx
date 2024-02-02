'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import type { CaptionProps } from 'react-day-picker'

import MingcuteLeftFill from '~icons/mingcute/left-fill'
import MingcuteRightFill from '~icons/mingcute/right-fill'

import Button from '@/components/Button'

function YearRender(props: CaptionProps) {
  return (
    <div className='flex justify-between items-center mb-2 px-1.5' >
      <div className='text-[10px] font-medium'>{ format(props?.displayMonth, 'yyyy 年 M 月', { locale: zhCN }) }</div>
      <div className='flex gap-1'>
        <Button className='w-5 h-5'>
          <MingcuteLeftFill className="icon text-[10px]"/>
        </Button>

        <Button className='w-5 h-5'>
          <MingcuteRightFill className="icon text-[10px]"/>

        </Button>

      </div>
    </div>
  )
}

export default function Calendar() {
  const [selected, setSelected] = useState<Date>(new Date())

  return (
    <DayPicker
      className="w-full pb-3 mb-4 border-b border-gray-200"
      fixedWeeks
      locale={zhCN}
      mode="single"
      selected={selected}
      showOutsideDays
      classNames={{
        root: 'select-none',
        table: 'w-full',

        /* 月份 */
        head_row: 'flex gap-1 cursor-default mb-2',
        head_cell: ' flex-1 rounded-[5px] text-[9px] font-normal',

        /* 天数 */
        row: 'flex',
        cell: 'flex-1 leading-7 text-primary1 w-7 h-7 text-center text-[10px]  hover:bg-itemHoverBackground rounded-[5px] [&:has([aria-selected])]:rounded-r-md [&:has([aria-selected].day-button)]:text-white [&:has([aria-selected])]:bg-sky-400',
        // text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20
        day: 'day-button text-center  aria-selected:opacity-100',
        day_outside: 'opacity-50'
        // day_range_end: 'day-range-end'
        // day_selected:
        //   'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        // day_today: 'bg-accent text-accent-foreground',
        // day_outside:
        //   'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        // day_disabled: 'text-muted-foreground opacity-50',
        // day_range_middle:
        //   'aria-selected:bg-accent aria-selected:text-accent-foreground',
        // day_hidden: 'invisible'
      }}
      components={{
        Caption: YearRender
      }}

      onSelect={setSelected}
    />
  )
}
