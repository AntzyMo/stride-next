'use client'
import Button from '@/components/Button'
import Tooltip from '@/components/Tooltip'

import MingcuteSearch2Line from '~icons/mingcute/search-2-line'
import MingcuteSettings5Line from '~icons/mingcute/settings-5-line'
import MingcuteLayoutRightbarOpenLine from '~icons/mingcute/layout-rightbar-open-line'
import MingcuteLayoutRightbarCloseLine from '~icons/mingcute/layout-rightbar-close-line'

import { cn } from '@/lib/utils'
import Calendar from './Calendar'
import { useGlobalContext } from '@/contexts'
import SiderItem from './components/SiderItem'

export default function LayoutSider() {
  const { siderCollapsed, triggerSiderCollapsed } = useGlobalContext()

  return (
    <div className={cn('w-[220px] px-1.5 py-2  border-r bg-siderBackground', siderCollapsed && 'hidden')}>
      <SiderItem
        className='py-1.5 rounded-[5px] mb-1'
        icon="S"
        text="My'Stride"
        rightRender={
          <Tooltip
            tirgger={
              <Button
                className='hoverItem p-1'
                icon={siderCollapsed ? <MingcuteLayoutRightbarCloseLine/> : <MingcuteLayoutRightbarOpenLine />}
                onClick={triggerSiderCollapsed}
              />
            }>
            收起
          </Tooltip>
        }
      />
      <div className='mb-4'>
        <SiderItem icon={<MingcuteSearch2Line />} text='搜索' />
        <SiderItem icon={<MingcuteSettings5Line />} text='设置' />
      </div>
      <Calendar/>
      <div>
        123
      </div>
    </div>
  )
}
