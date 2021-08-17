import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Headers,
  Param,
  Delete,
  Patch,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { AuthService } from '../auth/auth.service'
import { TodoDto, UpdateTodoDto } from './dto/todo.dto'

@Controller('todo')
export class TodoController {
  constructor(
    private todoService: TodoService,
    private authService: AuthService,
  ) {}

  @Get()
  public async getAll(@Headers() { token }) {
    const user = await this.authService.checkToken(token)
    if (!user) {
      return {
        error: 'user not found',
      }
    }

    return await this.todoService.findAll(user.id)
  }

  @Get(':id')
  public getOne(@Param() { id }) {
    return this.todoService.findOneById(id)
  }

  @Post()
  public async create(@Body() body: TodoDto, @Headers() headers) {
    const user = await this.authService.checkToken(headers.token)
    if (!user) {
      return {
        error: 'User not found',
      }
    }

    return await this.todoService.create({
      title: body.title,
      user: user,
    })
  }

  @Delete(':id')
  public delete(@Param() { id }) {
    return this.todoService.delete(id)
  }

  @Put(':id')
  public updateTodo(@Body() body: TodoDto, @Param() { id }) {
    return this.todoService.updateTodo(id, body)
  }

  @Patch(':id')
  public completeTodo(@Body() body: UpdateTodoDto, @Param() { id }) {
    return this.todoService.updateTodo(id, body)
  }
}
