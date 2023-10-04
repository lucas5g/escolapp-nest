import { Test, TestingModule } from '@nestjs/testing';
import { TeamService } from './team.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('TeamService', () => {
  let service: TeamService;
  enum genre {
    misto = 'misto',
    mas = 'mas',
    fem = 'fem',
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamService, PrismaService],
    }).compile();

    service = module.get<TeamService>(TeamService);
  });

  it('Create', async () => {
    const data = {
      name: 'team-test',
      modality_id: 1,
      group: 'group-test',
      genre: genre['misto'],
      unity_id: 1,
      students: ['C123123', 'C321321'],
    };

    const result = await service.create(data);

    expect(result).toMatchObject(data);

    await service.remove(result.id);
  }, 8000);

  it('Find All', async () => {
    const result = await service.findAll({ unity_id: 1 });
    result.forEach((row) => {
      expect(row).toHaveProperty('name');
      expect(row).toHaveProperty('group');
      expect(row).toHaveProperty('genre');
      expect(row).toHaveProperty('modality_id');
      expect(row).toHaveProperty('unity_id');
    });
  });

  it('Find One', async () => {
    const result = await service.findOne(1);
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('group');
    expect(result).toHaveProperty('genre');
    expect(result).toHaveProperty('modality_id');
    expect(result).toHaveProperty('unity_id');
  });

  it('Update', async () => {
    const data = {
      name: `team-test_${new Date().getMinutes()}`,
      modality_id: 1,
      group: 'group-test',
      genre: genre['misto'],
      unity_id: 1,
      students: ['C123123', 'C321321'],
    };

    const result = await service.update(1, data);

    expect(result).toMatchObject(data);
  }, 6000);
});
