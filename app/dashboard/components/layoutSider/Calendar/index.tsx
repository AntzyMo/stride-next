'use client'
import { useState } from 'react'
import { zhCN } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'

import YearRender from './YearRender'

export default function Calendar() {
  const [selected, setSelected] = useState<Date>()
  const [month, setMonth] = useState(new Date())

  return (
    <DayPicker
      className="w-full pb-3 mb-4 border-b border-gray-200"
      fixedWeeks
      locale={zhCN}
      mode="single"
      month={month}
      selected={selected}
      showOutsideDays
      today={new Date()}
      classNames={{
        root: 'select-none',
        table: 'w-full',

        /* 月份 */
        head_row: 'flex gap-1 cursor-default mb-2',
        head_cell: ' flex-1 rounded-[5px] text-[9px] font-normal',

        /* 天数 */
        tbody: 'grid gap-[2px]',
        row: 'flex gap-[2px]',
        cell: 'flex-1 leading-7 text-primary1 w-7 h-7 text-center text-[10px] cursor-pointer  hover:bg-itemHoverBackground rounded-[5px]   [&:has([aria-selected])]:bg-itemHoverBackground',
        // text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20
        day: 'day-button text-center w-full h-full',
        day_outside: 'opacity-50',

        day_today: '!text-white !bg-sky-400 rounded-[5px] text-center '
        // day_range_end: 'day-range-end'
        // day_selected:
        //   'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        // day_today: 'bg-accent text-accent-foreground',
        // day_disabled: 'text-muted-foreground opacity-50',
        // day_range_middle:
        //   'aria-selected:bg-accent aria-selected:text-accent-foreground',
        // day_hidden: 'invisible'
      }}
      components={{
        Caption: props => (
          <YearRender
            {...props}
            onMonthChange={(data: Date) => setMonth(data)}
          />
        )
      }}

      onSelect={setSelected}
    />
  )
}
