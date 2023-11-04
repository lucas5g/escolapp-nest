import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { jwtDecode } from 'jwt-decode';

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
    const decoded = jwtDecode(result.accessToken)

    expect(result).toHaveProperty('accessToken');

    ['unity'].forEach(property => {
      expect(decoded).toHaveProperty(property)
    })
    expect(decoded).not.toHaveProperty('password')

    console.log(decoded)
  }, 5000);
});
