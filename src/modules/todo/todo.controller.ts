import { Controller, Get, Param } from '@nestjs/common'
import { TodoService } from './todo.service'
import { ITodo } from './todo.types'

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get(':id')
  public getAll(@Param() { id }): ITodo[] | string {
    return id
  }
}
