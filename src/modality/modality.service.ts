import { Injectable } from '@nestjs/common';
import { CreateModalityDto } from './dto/create-modality.dto';
import { UpdateModalityDto } from './dto/update-modality.dto';
import { PrismaService } from '../prisma/prisma.service';
import { AuthEntity } from 'src/auth/entities/auth.entity';

@Injectable()
export class ModalityService {
  constructor(private prisma: PrismaService) {}
  create(createModalityDto: CreateModalityDto) {
    return this.prisma.modality.create({
      data: createModalityDto,
    });
  }

  findAll(auth: AuthEntity) {
    return this.prisma.modality.findMany({
      where: {
        unity_id: auth.unity_id,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.modality.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateModalityDto: UpdateModalityDto) {
    return this.prisma.modality.update({
      where: { id },
      data: updateModalityDto,
    });
  }

  remove(id: number) {
    return this.prisma.modality.delete({
      where: { id },
    });
  }
}
