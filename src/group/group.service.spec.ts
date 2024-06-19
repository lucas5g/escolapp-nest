import { GroupService } from '@/group/group.service';
import { PrismaService } from '@/prisma/prisma.service';
import { UnityService } from '@/unity/unity.service';
import { auth } from '@/utils/test';
import { Test, TestingModule } from '@nestjs/testing';
import 'dotenv/config';

describe('GroupService', () => {
  let service: GroupService;
  const properties = ['id', 'name', 'quantity'];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService, UnityService, PrismaService],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  it('Find All', async () => {
    const res = await service.findAll(auth);
    expect(res.length).toBeGreaterThan(0);

    res.forEach((row) => {
      expect(Object.keys(row)).toEqual(properties);
      expect(row.id).not.toEqual(0);
    });
  }, 5000);
});
