import Link from 'next/link'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import useDataBase from '@/hooks/useDataBase'
import { useTokenStyle } from '@/hooks/useStyles'

import { SiderButton } from '../SiderButton'
import MingcuteAddFill from '~icons/mingcute/add-fill'

export default function ProductMenus() {
  const [selected, setSelected] = useState('')
  const { menus, addProductMenu } = useDataBase()

  const router = useRouter()
  const route = useParams<{ id: string }>()

  const styles = useTokenStyle(token => ({
    background: token.colorBgTextHover
  }))

  useEffect(() => {
    setSelected(route.id)
  }, [route.id])

  const addTreeNode = async () => {
    const id = await addProductMenu()
    router.push(id)
  }

  return (
    <>
      <div className='grid gap-[2px]'>
        { menus?.map(item => (
          <Link href={item.id} key={item.id}>
            <SiderButton className={`${item.id === selected ? styles : ''}`} >
              { item.title }
            </SiderButton>
          </Link>
        )) }
      </div>
      <Button
        className='!flex !items-center !text-primary50 hover:!text-primary' icon={<MingcuteAddFill className='w-3.5 h-3.5' />} type='link'
        onClick={addTreeNode}>
        新增
      </Button>
    </>
  )
}
