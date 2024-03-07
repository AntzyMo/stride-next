import type { MouseEvent } from 'react'

import { cn } from '@/lib/utils'
import MingcuteCheckFill from '~icons/mingcute/check-fill'

interface CheckboxProps {
  className?: string
  checked?: boolean
  onChange?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function Checkbox({ className, checked, onChange }: React.PropsWithChildren<CheckboxProps>) {
  return (
    <button
      className={cn('w-4 h-4 border rounded-[5px] border-gray-200 flex items-center justify-center', className, { ' !bg-blue-500 border-none': checked })}
      onClick={e => onChange?.(e)}
    >
      { checked ? <MingcuteCheckFill className="w-2.5 h-2.5 text-white"/> : null }
    </button>

  )
}
