import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Todo } from '../todo/todo.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: true })
  isActive: boolean

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @OneToMany((type) => Todo, (todo) => todo.user, { onDelete: 'CASCADE' })
  todos: Todo[]
}
