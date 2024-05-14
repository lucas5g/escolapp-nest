import { PrismaService } from '@/prisma/prisma.service';
import { StudentService } from '@/student/student.service';
import { UnityService } from '@/unity/unity.service';
import { auth } from '@/utils/test';
import { Test, TestingModule } from '@nestjs/testing';

describe('StudentService', () => {
  let service: StudentService;
  const properties = ['ra', 'name', 'group'];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService, UnityService, PrismaService],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('Find All', async () => {
    const result = await service.findAll(auth);
    expect(result.length).toBeGreaterThan(0);

    result.forEach((row) => {
      expect(Object.keys(row)).toEqual(properties);
    });
  }, 5000);
});
