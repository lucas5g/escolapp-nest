import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '@/auth/auth.service';
import { UserService } from '@/user/user.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';
import { randomInt } from 'crypto';
import request from 'supertest';
// import { request } from '@/utils/request';

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
  const url = 'http://localhost:8000';
  it('/auth/me (PATCH)', async () => {
    const { body } = await request(url).post('/auth/login').send({
      email: 'admin@mail.com',
      password: 'qweqwe',
    });

    const unityId = randomInt(3) || 1;
    const { body: body2 } = await request(url)
      .patch('/auth/me')
      .set('Authorization', `Bearer ${body.accessToken}`)
      .send({
        unityId,
      });

    const decoded = jwtDecode(body2.accessToken);

    expect(decoded).toMatchObject({ unityId });
  });
});
