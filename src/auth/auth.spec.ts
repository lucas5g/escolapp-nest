import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '@/auth/auth.service';
import { UserService } from '@/user/user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';
import { randomInt } from 'crypto';
import { request } from '@/utils/request';

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

describe('Auth (e2e)', () => {
  it('/auth/me (PATCH)', async () => {
    const { data: login } = await request({
      method: 'post',
      data: {
        email: 'admin@mail.com',
        password: 'qweqwe',
      },
      url: 'auth/login',
    });

    const unityId = randomInt(2);
    const { data } = await request({
      data: {
        unityId,
      },
      method: 'patch',
      url: 'auth/me',
      token: login.accessToken,
    });

    const decoded = jwtDecode(data.accessToken);

    expect(decoded).toMatchObject({ unityId });
  });
});
