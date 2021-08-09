import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserRegistrationDto } from './dto/user-registration.dto'
import { UserService } from '../user/user.service'
import { UserLoginDto } from './dto/user-login.dto'

@Controller('auth')
export class AuthController {
  public constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/registration')
  public async registration(@Body() body: UserRegistrationDto) {
    const user = await this.userService.findOneByEmail(body.email)
    if (user) {
      throw new HttpException('User is exist', HttpStatus.CONFLICT)
    }
    const token = await this.authService.registration(body)
    return {
      token: token,
    }
  }

  @Post('/login')
  public async login(@Body() body: UserLoginDto) {
    const user = await this.userService.findOneByEmail(body.email)
  }
}
