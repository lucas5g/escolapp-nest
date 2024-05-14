import { GroupService } from '@/group/group.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UnityService } from '@/unity/unity.service';
import { auth } from '@/utils/test';
import { Test, TestingModule } from '@nestjs/testing';
import 'dotenv/config';

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService, UnityService, PrismaService],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  it('Find All', async () => {
    const result = await service.findAll(auth);
    expect(result.length).toBeGreaterThan(0);
    result.forEach((row) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('quantity');
    });
  }, 5000);
});
