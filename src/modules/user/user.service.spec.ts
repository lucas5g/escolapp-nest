import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('Crate', async() => {
    const data = {
      email:'test@mail.com',
      password: 'qweqwe',
      unity_id: 1
    } as User

    const result = await service.create(data)
    console.log(result)
    expect(service).toBeDefined();
  });
});
