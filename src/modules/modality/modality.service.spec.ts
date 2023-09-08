import { Test, TestingModule } from '@nestjs/testing';
import { ModalityService } from './modality.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ModalityService', () => {
  let service: ModalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModalityService, PrismaService],
    }).compile();

    service = module.get<ModalityService>(ModalityService);
  });

  it('Create', async() => {
    const data = {
      name: 'name',
      unity_id: 1
    }
    const result = await service.create(data)
    expect(result).toMatchObject(data)

    service.remove(result.id)
  });

  it('Find All', async() => {
    const result = await service.findAll()
    expect(result.length).toBeGreaterThan(1)

    result.forEach(row => {
      expect(row).toHaveProperty('name')
      expect(row).toHaveProperty('unity_id')
      
    })
  })

  it('Find One', async() => {
    const result = await service.findOne(1)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('unity_id')
  })

  it('Update', async() => {
    const data = {
      name: `name ${new Date().getMinutes()}`
    }
    const result = await service.update(1, data)
    expect(result).toMatchObject(data)
    
  })


});
