import { User } from '../user/user.entity'

export interface ITodo {
  id: number
  title: string
  isChecked: boolean
  description?: string
  createdDate: Date
  user: User
}
