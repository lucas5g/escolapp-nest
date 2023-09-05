import { Test, TestingModule } from '@nestjs/testing';
import { PlacesService } from './places.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PlacesService', () => {
  let service: PlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesService, PrismaService],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
  });

  it('create', async() => {
    const data = {
      name: 'Quadra',
      unity_id: 1
    }

    const result = await service.create(data)

    console.log(result)
  });
});
