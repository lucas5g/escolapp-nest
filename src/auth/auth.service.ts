import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as brcypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/user/user.service';
import { LoginAuthDto } from '@/auth/dto/login-auth.dto';
import { AuthEntity } from '@/auth/entities/auth.entity';
import { env } from '@/utils/env';
import { UpdateMeAuthDto } from '@/auth/dto/update-me-auth.dto';

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

  async update(updateMeAuthDto: UpdateMeAuthDto, auth: AuthEntity) {
    const user = await this.userService.update(auth.id, updateMeAuthDto);
    const accessToken = await this.createAccessToken(user);

    return { accessToken };
  }

  createAccessToken(auth: AuthEntity) {
    return this.jwt.signAsync(auth, {
      secret: env.jwtSecret,
    });
  }
}
