'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import { cn } from '@/lib/utils'
import SiderCollapsed from './SiderCollapsed'
import useDataBase from '@/hooks/useDataBase'

interface LayoutHeaderProps {
  className?: string
}

export default function LayoutHeader({ className }: LayoutHeaderProps) {
  const { getProductMenu } = useDataBase()
  const route = useParams<{ id: string }>()
  const [title, setTitle] = useState('')

  useEffect(() => {
    (async () => {
      const { title } = await getProductMenu(route.id)
      console.log('title', title)
      setTitle(title)
    })()
  }, [])

  return (
    <div className={cn('flex justify-between items-center', className)}>
      <div className='flex items-center gap-1'>
        <SiderCollapsed/>
        <div>{ title }</div>
      </div>
      <div>
        right
      </div>
    </div>
  )
}
