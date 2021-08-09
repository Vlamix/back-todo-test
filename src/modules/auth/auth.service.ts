import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { User } from '../user/user.entity'
import { UserRegistrationDto } from './dto/user-registration.dto'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  public passwordHash(password): Promise<string> {
    return bcrypt.hash(password, 12)
  }
  public async registration(userDto: UserRegistrationDto) {
    const hashedPassword = await this.passwordHash(userDto.password)
    const user = await this.userService.create({
      ...userDto,
      password: hashedPassword,
    })

    return this.generateToken(user)
  }
  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id }
    return {
      token: this.jwtService.sign(payload),
    }
  }
}
