import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { TodoModule } from '../todo/todo.module'
import { TodoSharedModule } from '../todo/todo-shared.module'
import { UserSharedModule } from './user-shared.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TodoSharedModule,
    UserSharedModule,
  ],
  controllers: [UserController],
})
export class UserModule {}
