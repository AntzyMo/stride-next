import { cn } from '@/lib/utils'

interface NavItemProps {
  className?: string
  icon?: string | React.ReactNode
  rightRender?: React.ReactNode
  text: string
}

function Icon({ icon }: Record<'icon', NavItemProps['icon']>) {
  if (typeof icon === 'string') {
    return (
      <span className='bg-itemSelectedBackground text-[12px] text-primary w-5 h-5 text-center mr-2 inline-block font-medium rounded-[5px]'>A</span>
    )
  }
  else {
    return (<div className='w-5 h-5 mr-2 flex items-center justify-center'> { icon } </div>)
  }
}

export default function NavItem({ text, className, icon, rightRender }: React.PropsWithChildren<NavItemProps>) {
  return (
    <div className={cn('baseHoverItem w-full flex items-center cursor-pointer', className)}>
      <div className='flex flex-1 items-center'>
        <Icon icon={icon}/>
        <span className='font-medium text-primary'>{ text }</span>
      </div>
      <div>{ rightRender }</div>
    </div>
  )
}
