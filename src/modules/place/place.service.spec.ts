import { Test, TestingModule } from '@nestjs/testing';
import { PlaceService } from './place.service';

describe('PlaceService', () => {
  let service: PlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceService],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  it.only('Create', async() => {
    const data = {
      name: 'name'
    }
    const result = await service.create(data)
    expect(result).toMatchObject(data)

    service.remove(result.id)
  });

  it('Find All', async() => {
    const result = await service.findAll()
    expect(result.length).toBeGreaterThan(0)

    result.forEach(row => {
      expect(row).toHaveProperty('name')
    })
  })

  it('Find One', async() => {
    const result = await service.findOne(1)
    expect(result).toHaveProperty('name')
  })

  it('Update', async() => {
    const data = {
      name: `name ${new Date().getMinutes()}`
    }
    const result = await service.update(1, data)
    expect(result).toMatchObject(data)
   
  })

});
