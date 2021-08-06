import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TodoService } from './todo.service'
import { ITodo } from './todo.types'
import { Todo } from './todo.entity'

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  public getAll(): Promise<Todo[]> {
    return this.todoService.findAll()
  }

  @Post()
  public create(@Body() body) {
    console.log(body)
    return this.todoService.create(body)
  }
}
