import { Test, TestingModule } from '@nestjs/testing';
import { UnitiesController } from './unities.controller';
import { UnitiesService } from './unities.service';

describe('UnitiesController', () => {
  let controller: UnitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitiesController],
      providers: [UnitiesService],
    }).compile();

    controller = module.get<UnitiesController>(UnitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
