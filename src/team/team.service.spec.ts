import { Test, TestingModule } from '@nestjs/testing';
import { TeamService } from './team.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Team } from '@prisma/client';

describe('TeamService', () => {
  let service: TeamService;
  enum genre {
    misto = 'misto',
    mas = 'mas',
    fem = 'fem'
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
      students: [
        'C123123',
        'C321321'
      ]
    }

    const result = await service.create(data)

    expect(result).toMatchObject(data)

    await service.remove(result.id)

  }, 8000);

  // it.only('')
});
