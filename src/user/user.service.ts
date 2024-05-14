import { AuthEntity } from '@/auth/entities/auth.entity';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { FindUserDto } from '@/user/dto/find-user.dto';
import { UpdateUserDto } from '@/user/dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private select = {
    id: true,
    email: true,
    unityId: true,
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
        unityId: auth.unityId,
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        password:
          updateUserDto.password && (await hash(updateUserDto.password, 12)),
      },
      select: this.select,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
