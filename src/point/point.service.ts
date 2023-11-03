import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindPointDto } from './dto/find-point.dto';

@Injectable()
export class PointService {
  constructor(private prisma: PrismaService) {}

  async findAll(findPointDto: FindPointDto) {
    const points = await this.prisma.game.findMany({
      where: findPointDto,
    });
    return points;
  }
}
