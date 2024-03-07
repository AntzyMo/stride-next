'use client'
import { createContext, useContext } from 'react'

import type { Table } from '@tanstack/react-table'
import type { Task } from '@/components/Table/types'
import type { Dispatch, SetStateAction } from 'react'

import useTableUtils from '@/components/Table/useTableUtils'

interface TreeTableConextProps {
  table: Table<Task>
  tableData: Task[]
  setTableData: Dispatch<SetStateAction<Task[]>>
}
const TableConext = createContext({} as TreeTableConextProps)

interface TreeTableProviderProps {
  value: TreeTableConextProps
}

export function TableProvider({ children, value }: React.PropsWithChildren<TreeTableProviderProps>) {
  const { tableData, setTableData, table } = value

  const tableUtils = useTableUtils({
    tableData,
    setTableData
  })

  return (
    <TableConext.Provider value={{
      table,
      setTableData,
      tableData,
      ...tableUtils
    }}>
      { children }
    </TableConext.Provider>
  )
}

export function useTableContext() {
  return useContext(TableConext)
}
