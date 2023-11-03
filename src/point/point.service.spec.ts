import { Test, TestingModule } from '@nestjs/testing';
import { PointService } from './point.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('PointService', () => {
  let service: PointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointService, PrismaService],
    }).compile();

    service = module.get<PointService>(PointService);
  });

  it('Find All', async () => {
    const result = await service.findAll({ unity_id: 1 });

    console.log(JSON.stringify(result, null, 2));
  });
});
