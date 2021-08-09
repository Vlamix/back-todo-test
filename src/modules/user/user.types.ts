import { Todo } from '../todo/todo.entity'

export interface IUser {
  id: number
  email: string
  password: string
  isActive: boolean
  created_at: Date
  todos: Todo[]
}
