import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UserService, PrismaService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('login', async() => {
    const data = {
      email: 'test@mail.com',
      password: 'qweqwe'
    }

    const result = await service.login(data)

    console.log(result)

  });
});
