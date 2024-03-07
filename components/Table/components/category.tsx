import type { Task } from '../types'
import type { CellContext } from '@tanstack/react-table'

export function categoryRender(cell: CellContext<Task, unknown>) {
  const { getValue } = cell

  return (
    <span>{ getValue() as string }</span>
  )
}
