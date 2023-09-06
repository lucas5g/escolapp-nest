import { Test, TestingModule } from '@nestjs/testing';
import { UnityService } from './unity.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UnityService', () => {
  let service: UnityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnityService, PrismaService],
    }).compile();

    service = module.get<UnityService>(UnityService);
  });

  it('Create', async() => {
    const data = {
      name: 'name'
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
