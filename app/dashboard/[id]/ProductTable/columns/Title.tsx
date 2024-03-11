import { useState } from 'react'

import type { Task } from '../types'
import type { CellContext } from '@tanstack/react-table'

import MingcuteDownLine from '~icons/mingcute/down-line'
import MingcuteRightLine from '~icons/mingcute/right-line'

import Checkbox from '@/components/Checkbox'

interface TitleProps extends CellContext<Task, unknown> {
  onBlur?: () => void
}

export function Title(titleProps: TitleProps) {
  const { row, getValue, onBlur } = titleProps
  const { isEdit: isEditProps } = row.original

  const [value, setValue] = useState(getValue() as string)
  const [isEdit, setIsEdit] = useState(!!isEditProps)

  return (
    <div
      className='flex items-center flex-1 flex-wrap overflow-hidden py-2 gap-2'
      style={{
        marginLeft: `${row.depth * 16}px`
      }}
    >
      <div className='h-full w-5 flex items-center'>
        { row.subRows.length > 0 && (
          <button onClick={row.getToggleExpandedHandler()}>
            { row.getIsExpanded() ? <MingcuteDownLine className='text-sm text-primary'/> : <MingcuteRightLine className='text-sm text-primary'/> }
          </button>
        ) }
      </div>

      <Checkbox
        checked={row.getIsSelected()}
        className='group-hover/table-body-item:border-gray-300 group-hover/table-body-item:bg-white'
        onChange={e => {
          const ToggleSelected = row.getToggleSelectedHandler()
          ToggleSelected(e)
        }}
      />
      <div className='flex-1 cursor-pointer'>
        { isEdit
          ? (
            <input
              autoFocus={isEdit}
              className='cursor-pointer w-full bg-transparent'
              defaultValue={value}
              onChange={e => setValue(e.target.value)}
              onBlur={() => {
                if (!value.trim()) {
                  onBlur?.()
                  return
                }
                setIsEdit(false)
              }}
            />)
          : <div onClick={() => setIsEdit(true)}>{ value }</div> }
      </div>
    </div>
  )
}
