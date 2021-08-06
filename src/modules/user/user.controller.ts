import { Controller, Delete, Get, Param } from '@nestjs/common'
import { UserService } from './user.service'
import { IUser } from './user.types'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public getAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  public async getOne(@Param() { id }): Promise<IUser> {
    return await this.userService.findOneById(id)
  }

  @Get()
  public async getOneById(@Param() { email }): Promise<IUser> {
    return await this.userService.findOneByEmail(email)
  }

  @Delete(':id')
  public remove(@Param() { id }): Promise<void> {
    return this.userService.remove(id)
  }
}
