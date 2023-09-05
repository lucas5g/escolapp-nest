import { Test, TestingModule } from '@nestjs/testing';
import { UnitiesService } from './unities.service';

describe('UnitiesService', () => {
  let service: UnitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitiesService],
    }).compile();

    service = module.get<UnitiesService>(UnitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
