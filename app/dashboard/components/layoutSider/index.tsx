'use client'
import { Button, Tree } from 'antd'
import type { ButtonProps } from 'antd'

import Tooltip from '@/components/Tooltip'
import IconButton from '@/components/IconButton'

import MingcuteSearch2Line from '~icons/mingcute/search-2-line'
import MingcuteSettings5Line from '~icons/mingcute/settings-5-line'
import MingcuteLayoutRightbarOpenLine from '~icons/mingcute/layout-rightbar-open-line'
import MingcuteLayoutRightbarCloseLine from '~icons/mingcute/layout-rightbar-close-line'

import { cn } from '@/lib/utils'
import Calendar from './Calendar'
import { useGlobalContext } from '@/contexts'

const treeData = [
  {
    title: '日程计划',
    key: 0,
    children: [
      {
        title: '子日程',
        key: 1
      }
    ]
  },
  {
    title: '日常',
    key: 2
  }
]

function SiderButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      block
      className={cn('!flex !items-center !justify-start !text-primary !font-medium !px-2.5 !py-1', className)}
      type="text"
      {...props}
    />
  )
}

export default function LayoutSider() {
  const { siderCollapsed, triggerSiderCollapsed } = useGlobalContext()
  return (
    <div className={cn('w-[220px] px-1.5 py-2  border-r bg-siderBackground', siderCollapsed && 'hidden')}>
      <div className='relative'>
        <SiderButton
          className='!py-1.5 !mb-1' icon={
            <div className='bg-itemSelectedBackground text-[12px] text-primary w-5 h-5 text-center leading-5 font-medium rounded-[5px]'>S</div>
          }>
          My'Stride
        </SiderButton>

        <div className='absolute right-1 top-[50%] -translate-y-[50%]'>
          <Tooltip
            tirgger={
              <IconButton
                className='hoverItem p-1'
                icon={siderCollapsed ? <MingcuteLayoutRightbarCloseLine/> : <MingcuteLayoutRightbarOpenLine />}
                onClick={triggerSiderCollapsed}
              />
            }>
            收起
          </Tooltip>
        </div>
      </div>

      <div className='mb-4'>
        <SiderButton icon={<MingcuteSearch2Line />}>
          搜索
        </SiderButton>
        <SiderButton icon={<MingcuteSettings5Line />}>
          设置
        </SiderButton>
      </div>

      <Calendar/>

      <div>
        <Tree
          blockNode
          className='!bg-transparent'
          treeData={treeData}
        />
      </div>
    </div>
  )
}
