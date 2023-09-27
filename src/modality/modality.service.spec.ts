import { Test, TestingModule } from '@nestjs/testing';
import { ModalityService } from './modality.service';
import { PrismaService } from '../prisma/prisma.service';
import { Modality } from '@prisma/client';

describe('ModalityService', () => {
  let service: ModalityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModalityService, PrismaService],
    }).compile();

    service = module.get<ModalityService>(ModalityService);
  });

  it('Create', async () => {
    const data = {
      name: 'name',
      unity_id: 1,
      members_quantity: 10,
      teams_quantity: 20,
    } as Modality;

    const result = await service.create(data);
    expect(result).toMatchObject(data);

    service.remove(result.id);
  }, 5000);

  it('Find All', async () => {
    const result = await service.findAll();
    expect(result.length).toBeGreaterThan(1);

    result.forEach((row) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('unity_id');
      expect(row).toHaveProperty('members_quantity');
      expect(row).toHaveProperty('teams_quantity');
    });
  });

  it('Find One', async () => {
    const result = await service.findOne(1);
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('unity_id');
    expect(result).toHaveProperty('members_quantity');
    expect(result).toHaveProperty('teams_quantity');
  });

  it('Update', async () => {
    const data = {
      name: `name ${new Date().getMinutes()}`,
    };
    const result = await service.update(1, data);
    expect(result).toMatchObject(data);
  });
});
