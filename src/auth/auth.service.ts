import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from '../user/user.service';
import * as brcypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { env } from 'src/utils/env';
import { AuthEntity } from './entities/auth.entity';
import { UpdateUserDto } from '../user/dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwt: JwtService,
    private userService: UserService,
  ) {}

  async login({ email, password }: LoginAuthDto) {
    const user = await this.user.findByEmail(email);

    if (!(await brcypt.compare(password, user?.password ?? ''))) {
      throw new UnauthorizedException('Email ou Senha inválidos');
    }

    delete user.password;

    const accessToken = await this.createAccessToken(user);
    
    return { accessToken };
  }

  async update(updateUserDto: UpdateUserDto, auth: AuthEntity) {
    const user = await this.userService.update(auth.id, updateUserDto);
    const accessToken = await this.createAccessToken(user);

    return { accessToken };
  }

  createAccessToken(auth: AuthEntity) {
    return this.jwt.signAsync(auth, {
      secret: env.jwtSecret,
    });
  }
}
