import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcrypt';
import { AuthEntity } from '../auth/entities/auth.entity';
import { FindUserDto } from './dto/find-user.dto';

@Injectable()
export class UserService {
  private select = {
    id: true,
    email: true,
    unity_id: true,
    profile: true,
  };

  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: await hash(createUserDto.password, 12),
      },
      select: this.select,
    });
  }

  findAll(auth: AuthEntity, findUserDto?: FindUserDto) {
    return this.prisma.user.findMany({
      where: {
        unity_id: auth.unity_id,
        ...findUserDto,
      },
      select: this.select,
      orderBy: {
        email: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUniqueOrThrow({
      where: { id },
      select: this.select,
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: this.select,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
