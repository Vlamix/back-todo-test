import { Injectable } from '@nestjs/common'
import { ITodo } from './todo.types'

@Injectable()
export class TodoService {
  public getAll(): ITodo[] {
    return [
      { description: 'sljflksjdlkfjdsflk', isComplete: false, text: 'some' },
    ]
  }
}
