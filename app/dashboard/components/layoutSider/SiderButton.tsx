import { Button } from 'antd'
import type { ButtonProps } from 'antd'

import { cn } from '@/lib/utils'

export function SiderButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      block
      className={cn('!flex !items-center !justify-start !text-primary !font-medium !px-2.5 !py-1', className)}
      type="text"
      {...props}
    />
  )
}
