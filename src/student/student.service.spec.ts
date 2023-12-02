import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { UnityService } from '../unity/unity.service';
import { AuthEntity } from '../auth/entities/auth.entity';
import { PrismaService } from '../prisma/prisma.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService, UnityService, PrismaService],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('Find All', async () => {
    const find = {
      unity_id: 2,
    } as AuthEntity;

    const result = await service.findAll(find);
    expect(result.length).toBeGreaterThan(0);
    ('');
    result.forEach((row) => {
      expect(row).toHaveProperty('ra');
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('group');
    });
  }, 5000);
});
