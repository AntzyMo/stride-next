export interface Task {
  title: string
  category: string
  isEdit?: boolean
  children?: Task[]
}
