import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Req, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthGuard } from './auth.guard';
import { User } from '@prisma/client';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
  // @UseGuards(AuthGuard)
  @Get('me')
  me(@Request() req:any){
    return req.user
  }

}
