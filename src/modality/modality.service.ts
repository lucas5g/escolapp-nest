import { Injectable, UseInterceptors } from '@nestjs/common';
import { CreateModalityDto } from './dto/create-modality.dto';
import { UpdateModalityDto } from './dto/update-modality.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Injectable()
@UseInterceptors(CacheInterceptor)
export class ModalityService {
  constructor(private prisma:PrismaService){

  }
  create(createModalityDto: CreateModalityDto) {
    return this.prisma.modality.create({
      data: createModalityDto
    });
  }

  findAll() {
    return this.prisma.modality.findMany();
  }

  findOne(id: number) {
    return this.prisma.modality.findUniqueOrThrow({
      where:{id}
    });
  }

  update(id: number, updateModalityDto: UpdateModalityDto) {
    return this.prisma.modality.update({
      where:{id},
      data:updateModalityDto
    });
  }

  remove(id: number) {
    return this.prisma.modality.delete({
      where:{id}
    });
  }
}