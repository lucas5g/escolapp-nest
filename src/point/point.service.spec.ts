import { Test, TestingModule } from '@nestjs/testing';
import { PointService } from './point.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupService } from 'src/group/group.service';
import { UnityService } from 'src/unity/unity.service';

describe('PointService', () => {
  let service: PointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointService, PrismaService, GroupService, UnityService],
    }).compile();

    service = module.get<PointService>(PointService);
  });

  it('Find All', async () => {
    const result = await service.findAll({ unity_id: 2 });

    ['name', 'totalPoints'].forEach((property) => {
      expect(result[0]).toHaveProperty(property);
    });
  }, 6000);
});
