import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from '../user/user.service';
import * as brcypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { env } from 'src/utils/env';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwt: JwtService,
  ) {}

  async login({ email, password }: LoginAuthDto) {
    const user = await this.user.findByEmail(email);

    if (!(await brcypt.compare(password, user?.password ?? ''))) {
      throw new UnauthorizedException('Email ou Senha inválidos');
    }

    delete user.password;

    const accessToken = await this.jwt.signAsync(user, {
      secret: env.jwtSecret,
    });

    return { accessToken };
  }
}
