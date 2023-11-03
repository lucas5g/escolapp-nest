import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindPointDto } from './dto/find-point.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PointService {

  constructor(private prisma: PrismaService) { }

  async findAll(findPointDto: FindPointDto) {

    const [groups, games ] = await this.prisma.$transaction([
      this.prisma.g
    ])
    // const points = await this.prisma.game.findMany({
    //   where: findPointDto
    // })
    // return points
  }

}
