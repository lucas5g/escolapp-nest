import { Test, TestingModule } from '@nestjs/testing';
import { GroupService } from './group.service';

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupService],
    }).compile();

    service = module.get<GroupService>(GroupService);
  });

  it.only('Find All', async () => {
    const result = await service.findAll({unity:'contagem'})
    console.log(result)
    expect(service).toBeDefined();
  });
});
