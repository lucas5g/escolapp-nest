import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('Find All', async() => {
    const result = await service.findAll({unity:'contagem'})
    expect(result.length).toBeGreaterThan(0)
    result.forEach(row => {
      expect(row).toHaveProperty('ra')
      expect(row).toHaveProperty('name')
      expect(row).toHaveProperty('group')
    })
  });
});
