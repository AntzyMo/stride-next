'use client'
import { createContext, useContext, useState } from 'react'

interface GlobalContextProps {
  siderCollapsed: boolean
}

interface GlobalContextData extends GlobalContextProps {
  /* 触发侧边栏的显示隐藏 */
  triggerSiderCollapsed: () => void
}

const GlobalContext = createContext({} as GlobalContextData)

export function GlobalProvider({ children }: React.PropsWithChildren) {
  const [globalData, setGlobalData] = useState<GlobalContextProps>({
    siderCollapsed: false
  })

  const triggerSiderCollapsed = () => {
    const { siderCollapsed } = globalData
    setGlobalData({
      ...globalData,
      siderCollapsed: !siderCollapsed
    })
  }

  return (
    <GlobalContext.Provider value={{
      ...globalData,
      triggerSiderCollapsed
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(GlobalContext)
}
