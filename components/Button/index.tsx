import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export default function Button({ children, className, icon, ...props }: React.PropsWithChildren<ButtonProps>) {
  return (
    <button {...props} className={cn('w-full p-1 flex items-center justify-center rounded-[5px] hover:bg-itemHoverBackground hover:text-itemSelectedBackground', className)}>
      { icon }
      { children }
    </button>
  )
}
