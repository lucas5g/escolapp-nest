import { PlaceService } from '@/place/place.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';
import { Test, TestingModule } from '@nestjs/testing';

describe('PlaceService', () => {
  let service: PlaceService;
  const properties = ['id', 'name', 'unityId'];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceService, PrismaService],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  it('Create', async () => {
    const data = {
      name: 'name',
      unityId: 1,
    };
    const result = await service.create(data);
    expect(result).toMatchObject(data);

    await service.remove(result.id);
  }, 6000);

  it('Find All', async () => {
    const result = await service.findAll(auth);
    expect(result.length).toBeGreaterThan(0);

    for (const row of result) {
      expect(Object.keys(row)).toEqual(properties);
    }
  });

  it('Find One', async () => {
    const result = await service.findOne(1);
    expect(Object.keys(result)).toEqual(properties);
  });

  it('Update', async () => {
    const data = {
      name: `name ${new Date().getMinutes()}`,
    };
    const result = await service.update(1, data);
    expect(result).toMatchObject(data);
  }, 5000);
});
