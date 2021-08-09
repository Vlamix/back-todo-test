import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserSharedModule } from '../user/user-shared.module'
import { TodoSharedModule } from '../todo/todo-shared.module'
import { JwtModule, JwtService } from '@nestjs/jwt'

@Module({
  imports: [
    UserSharedModule,
    TodoSharedModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '2h' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
