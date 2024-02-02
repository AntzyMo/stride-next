import LayoutSider from './components/layoutSider'
import LayoutHeader from './components/layoutHeader'

export default function WorkspaceLayout() {
  return (
    <div className='flex h-[100vh]'>
      <LayoutSider/>
      <div className='flex-1 p-3.5'>
        <LayoutHeader className='mb-4'/>
        <div className='pl-1.5'>
          content
        </div>
      </div>
    </div>
  )
}
