'use client'
import { useState } from 'react'

import NavItem from './compnents/NavItem'
import Calendar from './compnents/Calendar'

import Button from '@/components/Button'
import Tooltip from '@/components/Tooltip'

import MingcuteSearch2Line from '~icons/mingcute/search-2-line'
import MingcuteSettings5Line from '~icons/mingcute/settings-5-line'
import MingcuteLayoutRightbarOpenLine from '~icons/mingcute/layout-rightbar-open-line'
import MingcuteLayoutRightbarCloseLine from '~icons/mingcute/layout-rightbar-close-line'

import { cn } from '@/lib/utils'

export default function LayoutSider() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn('w-[220px] px-1.5 py-2  border-r bg-siderBackground', collapsed && 'hidden')}>
      <NavItem
        className='py-1.5 rounded-[5px] mb-1'
        icon="A"
        text='Antzy'
        rightRender={
          <Tooltip
            tirgger={
              <Button
                icon={collapsed ? <MingcuteLayoutRightbarCloseLine/> : <MingcuteLayoutRightbarOpenLine />}
                onClick={() => setCollapsed(!collapsed)} />
            }>
            收起
          </Tooltip>

        }
      />
      <div className='mb-4'>
        <NavItem icon={<MingcuteSearch2Line />} text='搜索' />
        <NavItem icon={<MingcuteSettings5Line />} text='设置' />
      </div>
      <Calendar/>
    </div>
  )
}
