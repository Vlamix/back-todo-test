import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { User } from '../user/user.entity'

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ default: false })
  isChecked: boolean

  @Column({ default: '' })
  description: string

  @CreateDateColumn()
  createdDate: Date

  @ManyToOne((type) => User, (user) => user.todos, { onDelete: 'CASCADE' })
  user: User
}
