import LayoutSider from './components/layoutSider'
import LayoutHeader from './components/layoutHeader'

import TableTree from '@/components/Table'
import { GlobalProvider } from '@/contexts/globalProvider'

export default function WorkspaceLayout() {
  return (
    <GlobalProvider>
      <div className='flex h-[100vh]'>
        <LayoutSider/>
        <div className='flex-1 p-3.5  pl-1.5'>
          <LayoutHeader className='mb-4 ml-3'/>
          <div className='pl-1.5'>
            <TableTree/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}
