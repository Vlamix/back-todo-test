import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Headers,
  Param,
  Delete,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { Todo } from './todo.entity'
import { AuthService } from '../auth/auth.service'

@Controller('todo')
export class TodoController {
  constructor(
    private todoService: TodoService,
    private authService: AuthService,
  ) {}

  @Get()
  public getAll(@Headers() { token }): Promise<Todo[]> {
    return this.todoService.findAll()
  }

  @Get(':id')
  public getOne(@Param() { id }, @Headers() { token }) {
    return this.todoService.findOneById(id)
  }

  @Post()
  public create(@Body() body, @Headers() { token }) {
    console.log(body)
    return this.authService.checkToken(token)
    //this.todoService.create(body)
  }

  @Delete(':id')
  public delete(@Param() { id }, @Headers() { token }) {
    return this.todoService.delete(id)
  }

  @Put(':id')
  public updateTodo(@Body() body, @Param() { id }, @Headers() { token }) {
    return this.todoService.updateTodo(id, body)
  }

  @Put('id')
  public completeTodo(@Body() body, @Param() { id }, @Headers() { token }) {
    return this.todoService.completeTodo(id, body)
  }
}
