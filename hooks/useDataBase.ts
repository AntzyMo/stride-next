import { useEffect, useState } from 'react'
import type { ProductMenus } from '@/database'

import { addProductMenusItem, getProductMenus, getProductMenusItem } from '@/database/indexdb'

export default function useDataBase() {
  const [menus, setMenus] = useState<ProductMenus[]>([])

  useEffect(() => {
    (async () => {
      const list = await getProductMenus()
      console.log('list', list)
      setMenus(list)
    })()
  }, [])

  const addProductMenu = async () => {
    const id = await addProductMenusItem()
    const list = await getProductMenus()
    setMenus(list)

    return id
  }

  const getProductMenu = async (id: string) => {
    return getProductMenusItem(id)
  }

  return {
    menus,
    addProductMenu,
    getProductMenu
  }
}
