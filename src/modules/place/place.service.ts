import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlaceService {
  constructor(private prisma:PrismaService){}
  create(createPlaceDto: CreatePlaceDto) {
    return this.prisma.place.create({
      data: createPlaceDto
    });
  }

  findAll() {
    return this.prisma.place.findMany();
  }

  findOne(id: number) {
    return this.prisma.place.findUniqueOrThrow({
      where:{id}
    });
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return this.prisma.place.update({
      where: {id},
      data:updatePlaceDto
    });
  }

  remove(id: number) {
    return this.prisma.place.delete({
      where:{id}
    });
  }
}
