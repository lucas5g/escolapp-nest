import { Test, TestingModule } from '@nestjs/testing';

import { auth } from '@/utils/test';
import { PointService } from '@/point/point.service';
import { PrismaService } from '@/prisma/prisma.service';
import { GroupService } from '@/group/group.service';
import { UnityService } from '@/unity/unity.service';

describe('PointService', () => {
  let service: PointService;
  const properties = ['id', 'name', 'totalPoints'];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointService, PrismaService, GroupService, UnityService],
    }).compile();

    service = module.get<PointService>(PointService);
  });

  it('Find All', async () => {
    const result = await service.findAll(auth);

    for (const row of result) {
      expect(Object.keys(row)).toEqual(properties);
    }
  }, 6000);
});
