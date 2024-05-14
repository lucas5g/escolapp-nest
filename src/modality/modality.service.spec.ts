import { Test, TestingModule } from '@nestjs/testing';
import { CreateModalityDto } from '@/modality/dto/create-modality.dto';
import { ModalityService } from '@/modality/modality.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';

describe('ModalityService', () => {
  let service: ModalityService;
  const properties = [
    'id',
    'name',
    'type',
    'membersQuantity',
    'teamsQuantity',
    'unityId',
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModalityService, PrismaService],
    }).compile();

    service = module.get<ModalityService>(ModalityService);
  });

  it('Create', async () => {
    const data: CreateModalityDto = {
      name: 'name',
      unityId: 1,
      membersQuantity: 10,
      teamsQuantity: 20,
      type: 'collective',
    };

    const result = await service.create(data);
    expect(result).toMatchObject(data);

    await service.remove(result.id);
  }, 5000);

  it('Find All', async () => {
    const result = await service.findAll(auth);
    expect(result.length).toBeGreaterThanOrEqual(1);

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
  });
});
