import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Request,
  Patch,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

import { Public } from './decorators/public.decorator';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { AuthEntity } from './entities/auth.entity';
import { Auth } from './decorators/auth.decorator';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Get('me')
  me(@Request() req: any) {
    return req.user;
  }

  @Patch('me')
  updateMe(@Body() body: UpdateUserDto, @Auth() auth: AuthEntity) {
    return this.userService.update(auth.id, body);
  }
}
