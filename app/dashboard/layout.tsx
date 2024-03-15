import { ConfigProvider } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'

import LayoutSider from './components/layoutSider'
import LayoutHeader from './components/layoutHeader'

import { GlobalProvider } from '@/contexts/globalProvider'

function ProviderRender({ children }: React.PropsWithChildren) {
  return (
    <AntdRegistry>
      <ConfigProvider>
        <GlobalProvider>
          { children }
        </GlobalProvider>
      </ConfigProvider>
    </AntdRegistry>
  )
}

export default function WorkspaceLayout({ children }: React.PropsWithChildren) {
  return (
    <ProviderRender>
      <div className='flex h-[100vh]'>
        <LayoutSider/>
        <div className='flex-1 p-3.5  pl-1.5'>
          <LayoutHeader className='mb-4 ml-3'/>
          <div className='pl-1.5'>
            { children }
          </div>
        </div>
      </div>
    </ProviderRender>
  )
}
