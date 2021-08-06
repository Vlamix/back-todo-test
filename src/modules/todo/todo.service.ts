import { Body, Injectable } from '@nestjs/common'
//import { ITodo } from './todo.types'
import { Repository } from 'typeorm'
import { Todo } from './todo.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { ITodo } from './todo.types'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  public async create(todo: ITodo) {
    const newTodo = await this.todoRepository.save(todo)
    return newTodo
  }

  public async findAll() {
    const todo = await this.todoRepository.find()
    return todo
  }

  public async findOneById(id: number) {
    return await this.todoRepository.findOne(id)
  }

  public async delete(id: number) {
    await this.todoRepository.delete(id).then((result) => {
      return result
    })
  }

  public async updateTodo(id: number, @Body() body) {
    await this.todoRepository.update(id, body).then((result) => {
      return result
    })
  }

  public async completeTodo(id: number, body: any) {
    await this.todoRepository.update(id, body).then((result) => {
      return result
    })
  }

  /*  public FindAll()

  public update(todo: ITodo): ITodo {
    return this.todoRepository.update()
  }*/
}
