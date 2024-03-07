import type { TableUtils, TableUtilsOptions, Task } from './types'

function createTask(): Task {
  return {
    title: '',
    category: '',
    isEdit: true,
    children: []
  }
}

export default function useTableUtils({ tableData, setTableData }: TableUtilsOptions): TableUtils {
  /* 新增一条计划 */
  const addTask: TableUtils['addTask'] = () => {
    setTableData([...tableData, createTask()])
  }

  /* 删除最后一条 */
  const delLastTask: TableUtils['delLastTask'] = () => {
    const deletedData = tableData.slice(0, tableData.length - 1)
    setTableData(deletedData)
  }

  return {
    addTask,
    delLastTask
  }
}
