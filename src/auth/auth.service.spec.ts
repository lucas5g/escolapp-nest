import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '@/auth/auth.service';
import { UserService } from '@/user/user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UserService, PrismaService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('login', async () => {
    const data = {
      email: 'admin@mail.com',
      password: 'qweqwe',
    };

    const result = await service.login(data);
    const decoded = jwtDecode(result.accessToken);

    expect(result).toHaveProperty('accessToken');

    expect(Object.keys(decoded)).toEqual([
      'id',
      'email',
      'profile',
      'unityId',
      'iat',
    ]);
  });

  it('update', async () => {
    const res = await service.update({ password: 'qweqwe' }, auth);
    expect(res).toHaveProperty('accessToken');
  });
});
