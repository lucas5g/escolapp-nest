import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from './group.service';
import 'dotenv/config';
import { AuthEntity } from 'src/auth/entities/auth.entity';
import { UnityService } from 'src/unity/unity.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService, UnityService, PrismaService],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  it('Find All', async () => {
    const find = {
      unity_id: 2,
    } as AuthEntity;
    const result = await service.findAll(find);
    expect(result.length).toBeGreaterThan(0);
    result.forEach((row) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('quantity');
    });
  });
});
