import { Test, TestingModule } from '@nestjs/testing';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/user/user.service';
import { AuthService } from '@/auth/auth.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';
import { UpdateUserDto } from '@/user/dto/update-user.dto';

describe('UserService', () => {
  let service: UserService;
  let serviceAuth: AuthService;
  const properties = ['id', 'email', 'unityId', 'profile'];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    const moduleAuth: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, UserService, JwtService],
    }).compile();

    service = module.get<UserService>(UserService);
    serviceAuth = moduleAuth.get<AuthService>(AuthService);
  });

  it('create', async () => {
    const data = {
      email: `test${new Date().getMinutes()}@mail.com`,
      password: 'qweqwe',
      unityId: 1,
      profile: 'admin',
    } as User;

    const result = await service.create(data);
    delete data.password;
    expect(result).toMatchObject(data);
    expect(result).not.toHaveProperty('password');

    await service.remove(result.id);
  });

  it('find all', async () => {
    const result = await service.findAll(auth);

    for (const row of result) {
      expect(Object.keys(row)).toEqual(properties);
    }
  }, 5000);

  it('find one', async () => {
    const result = await service.findOne(1);
    expect(Object.keys(result)).toEqual(properties);
  });

  it('update', async () => {
    const data = {
      email: `testupdate${new Date().getMinutes()}@mail.com`,
    };

    const result = await service.update(1, data);
    expect(result).toMatchObject(data);
    expect(result).not.toHaveProperty('password');
  });

  it('update password and login', async () => {
    const data: UpdateUserDto = {
      email: 'test@mail.com',
      password: 'qweqwe',
    };

    await service.update(1, data);

    const auth = await serviceAuth.login({
      email: 'test@mail.com',
      password: 'qweqwe',
    });

    expect(auth).toBe;
  });
});
