import { cn } from '@/lib/utils'

interface SiderItemProps {
  className?: string
  icon?: string | React.ReactNode
  rightRender?: React.ReactNode
  text: string
}

function Icon({ icon }: Record<'icon', SiderItemProps['icon']>) {
  if (typeof icon === 'string') {
    return (
      <span className='bg-itemSelectedBackground text-[12px] text-primary w-5 h-5 text-center mr-2 inline-block font-medium rounded-[5px]'>{ icon }</span>
    )
  }
  else {
    return (<div className='w-5 h-5 mr-2 flex items-center justify-center'> { icon } </div>)
  }
}

export default function SiderItem({ text, className, icon, rightRender }: React.PropsWithChildren<SiderItemProps>) {
  return (
    <div className={cn('px-2.5 text-sm rounded-[5px] py-1 hover:bg-itemHoverBackground  w-full flex items-center cursor-pointer', className)}>
      <div className='flex flex-1 items-center'>
        { icon ? <Icon icon={icon}/> : null }
        <span className='font-medium text-primary'>{ text }</span>
      </div>
      { rightRender ? <div>{ rightRender }</div> : null }
    </div>
  )
}
