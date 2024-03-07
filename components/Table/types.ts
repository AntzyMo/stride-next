import type { Dispatch, SetStateAction } from 'react'
import type { Cell, Row } from '@tanstack/react-table'

export enum ColumnKey {
  title = 'title',
  category = 'category'
}

export interface Task {
  title: string
  category: string
  isEdit?: boolean
  children?: Task[]
}

export type TableRenderFn = (row: Row<Task>, col: Cell<Task, unknown>) => React.ReactNode

export type TableRender<T extends Record<string, string>> = {
  [K in keyof T]?: TableRenderFn;
}

export interface TableUtilsOptions {
  tableData: Task[]
  setTableData: Dispatch<SetStateAction<Task[]>>
}

export interface TableUtils {
  addTask: () => void
  delLastTask: () => void
}
