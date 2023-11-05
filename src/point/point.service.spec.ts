import { Test, TestingModule } from '@nestjs/testing';
import { PointService } from './point.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupService } from 'src/group/group.service';
import { UnityService } from 'src/unity/unity.service';
import { AuthEntity } from 'src/auth/entities/auth.entity';

describe('PointService', () => {
  let service: PointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointService, PrismaService, GroupService, UnityService],
    }).compile();

    service = module.get<PointService>(PointService);
  });

  it('Find All', async () => {
    const auth = {
      unity_id: 1,
    } as AuthEntity;
    const result = await service.findAll(auth);

    ['name', 'totalPoints'].forEach((property) => {
      expect(result[0]).toHaveProperty(property);
    });
  }, 6000);
});
