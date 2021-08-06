import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm'
import { Todo } from '../todo/todo.entity'

@Entity()
export class User {
  @PrimaryColumn()
  id: number

  @Column({ default: null })
  firstName: string

  @Column({ default: null })
  lastName: string

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
