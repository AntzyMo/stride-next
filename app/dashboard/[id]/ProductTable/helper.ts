import type { Task } from './types'

export function createRow(): Task {
  return {
    title: '',
    category: '',
    isEdit: true,
    children: []
  }
}
