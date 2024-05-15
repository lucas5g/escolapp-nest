import { Test, TestingModule } from '@nestjs/testing';

import { auth } from '@/utils/test';
import { TeamService } from '@/team/team.service';
import { PrismaService } from '@/prisma/prisma.service';

describe('TeamService', () => {
  let service: TeamService;
  const properties = [
    'id',
    'name',
    'group',
    'genre',
    'modalityId',
    'unityId',
    'students',
    'modality',
  ];

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
      modalityId: 1,
      group: 'group-test',
      genre: genre['misto'],
      unityId: 1,
      students: ['C123123', 'C321321'],
    };

    const result = await service.create(data);

    expect(result).toMatchObject(data);

    await service.remove(result.id);
  }, 5000);

  it('Find All', async () => {
    const res = await service.findAll(auth);

    for (const row of res) {
      expect(Object.keys(row)).toEqual(properties);
      expect(row.modality).toHaveProperty('name');
    }
  }, 5000);

  it('Find One', async () => {
    const result = await service.findOne(1);
    expect(Object.keys(result)).toEqual(
      properties.filter((property) => property !== 'modality'),
    );
  }, 6000);

  it('Update', async () => {
    const data = {
      name: `team-test_${new Date().getMinutes()}`,
      modalityId: 1,
      group: 'group-test',
      genre: genre['misto'],
      unityId: 2,
      students: ['C123123', 'C321321'],
    };

    const result = await service.update(1, data);

    expect(result).toMatchObject(data);
  }, 7000);
});
