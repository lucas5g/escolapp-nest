import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import {hash} from 'bcrypt'

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {

    return this.prisma.user.create({
      data:{
        ...createUserDto,
        password: await hash(createUserDto.password, 12)
      },
      select:{
        id:true,
        email:true,
        unity_id:true
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where:{id}
    });
  }
}
