'use client'
import Tooltip from '@/components/Tooltip'
import IconButton from '@/components/IconButton'

import { useGlobalContext } from '@/contexts'
import MingcuteLayoutLeftbarOpenLine from '~icons/mingcute/layout-leftbar-open-line'

export default function SiderCollapsed() {
  const { siderCollapsed, triggerSiderCollapsed } = useGlobalContext()

  if (siderCollapsed) {
    return (
      <Tooltip
        tirgger={
          <IconButton
            className='hoverItem p-1'
            icon={<MingcuteLayoutLeftbarOpenLine/>}
            onClick={triggerSiderCollapsed}
          />
        }>
        展开
      </Tooltip>
    )
  }

  return null
}
