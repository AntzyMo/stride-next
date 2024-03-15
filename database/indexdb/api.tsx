import { v4 as uuidv4 } from 'uuid'
import localforage from 'localforage'
import type { Task } from '@/app/dashboard/[id]/ProductTable/types'

export interface ProductMenus {
  id: string
  title: string
  icon: string
}

const stridedb = localforage.createInstance({
  name: 'Stride',
  storeName: 'stride'
})

const stridetododb = localforage.createInstance({
  name: 'Stride',
  storeName: 'task'
})

export async function getProductMenus(): Promise<ProductMenus[]> {
  const menus = await stridedb.getItem('menus') as ProductMenus[]
  return menus?.length ? menus : []
}

export async function addProductMenusItem() {
  const id = uuidv4()
  const menus = await getProductMenus()
  await stridedb.setItem('menus', [
    ...menus,
    {
      id,
      title: '无标题',
      icon: ''
    }
  ])

  return id
}

export async function getProductMenusItem(id: string) {
  const menus = await getProductMenus()

  return menus.find(item => item.id === id) || {}
}

export async function getTask(id: string): Promise<Task[]> {
  const task = await stridetododb.getItem(id) as Task[]
  return task?.length ? task : []
}
