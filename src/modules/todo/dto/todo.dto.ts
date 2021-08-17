import { IsNotEmpty } from 'class-validator'

export class TodoDto {
  @IsNotEmpty()
  readonly title: string
}

export class UpdateTodoDto {
  title?: string
  isChecked?: boolean
}
