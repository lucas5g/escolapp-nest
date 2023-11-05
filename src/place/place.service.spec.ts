import { Test, TestingModule } from '@nestjs/testing';
import { PlaceService } from './place.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthEntity } from '../auth/entities/auth.entity';

describe('PlaceService', () => {
  let service: PlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceService, PrismaService],
    }).compile();

    service = module.get<PlaceService>(PlaceService);
  });

  it('Create', async () => {
    const data = {
      name: 'name',
      unity_id: 1,
    };
    const result = await service.create(data);
    expect(result).toMatchObject(data);

    await service.remove(result.id);
  }, 6000);

  it('Find All', async () => {
    const auth = {
      unity_id: 1,
    } as AuthEntity;
    const result = await service.findAll(auth);
    expect(result.length).toBeGreaterThan(0);

    result.forEach((row) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('unity_id');
    });
  });

  it('Find One', async () => {
    const result = await service.findOne(1);
    expect(result).toHaveProperty('name');
  });

  it('Update', async () => {
    const data = {
      name: `name ${new Date().getMinutes()}`,
    };
    const result = await service.update(1, data);
    expect(result).toMatchObject(data);
  });
});
