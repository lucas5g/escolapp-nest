import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { AuthEntity } from '../auth/entities/auth.entity';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

describe('UserService', () => {
  let service: UserService;
  let serviceAuth: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    const moduleAuth: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, UserService, JwtService]
    }).compile()

    service = module.get<UserService>(UserService);
    serviceAuth = moduleAuth.get<AuthService>(AuthService)
  });

  it('create', async () => {
    const data = {
      email: `test${new Date().getMinutes()}@mail.com`,
      password: 'qweqwe',
      unity_id: 1,
      profile: 'admin',
    } as User;

    const result = await service.create(data);
    delete data.password;
    expect(result).toMatchObject(data);
    expect(result).not.toHaveProperty('password');

    await service.remove(result.id);
  });

  it('find all', async () => {
    const auth = {
      unity_id: 1,
    } as AuthEntity;
    const result = await service.findAll(auth);
    result.forEach((row) => {
      expect(row).not.toHaveProperty('password');
      expect(row).toHaveProperty('id');
      expect(row).toHaveProperty('email');
      expect(row).toHaveProperty('unity_id');
    });
  }, 5000);

  it('find one', async () => {
    const result = await service.findOne(1);
    expect(result).not.toHaveProperty('password');
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('email');
    expect(result).toHaveProperty('unity_id');
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
      email:'test@mail.com',
      password: 'qweqwe',
    }

    await service.update(1, data)

    const auth = await serviceAuth.login({email:'test@mail.com', password:'qweqwe'})

    expect(auth).toBe

  })
});
