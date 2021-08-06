import { IsEmail } from 'class-validator'

export class UserLoginDto {
  @IsEmail()
  readonly email: string
}
