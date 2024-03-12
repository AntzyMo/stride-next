import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ComponentProps<'div'> {
  icon?: React.ReactNode
}
// hover:bg-gray-100
export default function IconButton({ children, className, icon, ...props }: React.PropsWithChildren<ButtonProps>) {
  return (
    <span {...props} className={cn('flex items-center text-sm text-primary cursor-pointer gap-1.5 p-1.5 px-2 rounded-[5px] hover:bg-gray-100', className)}>
      { icon }
      { children }
    </span>
  )
}
