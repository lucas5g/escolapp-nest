import { Test, TestingModule } from '@nestjs/testing';
import { PlacesService } from './places.service';

describe('PlacesService', () => {
  let service: PlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesService],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
  });

  it('create', async() => {
    const data = {
      name: 'qwe'
    }

    const result = await service.create(data)

    console.log(result)
  });
});
