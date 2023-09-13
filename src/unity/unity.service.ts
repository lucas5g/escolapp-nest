import { Inject, Injectable } from '@nestjs/common';
import { CreateUnityDto } from './dto/create-unity.dto';
import { UpdateUnityDto } from './dto/update-unity.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class UnityService {

  constructor(
    private prisma: PrismaService,
    // @Inject(CACHE_MANAGER) private cache: Cache
  ) { }

  create(createUnityDto: CreateUnityDto) {
    return this.prisma.unity.create({
      data: createUnityDto
    });
  }

  findAll() {
    return this.prisma.unity.findMany();
  }

  findOne(id: number) {
    return this.prisma.unity.findUniqueOrThrow({
      where: { id }
    });
  }

  update(id: number, updateUnityDto: UpdateUnityDto) {
    return this.prisma.unity.update({
      where: { id },
      data: updateUnityDto
    });
  }

  remove(id: number) {
    return this.prisma.unity.delete({
      where: { id }
    });
  }
}
