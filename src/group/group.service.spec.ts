import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from './group.service';
import 'dotenv/config';

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  it('Find All', async () => {
    const result = await service.findAll({ unity: 'contagem' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach((row) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('quantity');
    });
  });
});
