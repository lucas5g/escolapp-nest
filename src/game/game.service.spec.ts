import { FindGameDto } from '@/game/dto/find-game.dto';
import { GameService } from '@/game/game.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';
import { Test, TestingModule } from '@nestjs/testing';
import { format } from 'date-fns';
describe('GameService', () => {
  let service: GameService;

  const properties = [
    'id',
    'date',
    'startHours',
    'endHours',
    'comments',
    'teams',
    'placeId',
    'modalityId',
    'userId',
    'unityId',
    'createdAt',
    'updatedAt',
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameService, PrismaService],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('Create', async () => {
    const teams = [
      {
        goals: 0,
        points: 0,
        team_id: 1,
      },
      {
        goals: 0,
        points: 0,
        team_id: 2,
      },
    ];

    const data = {
      date: format(new Date(), 'yyyy-MM-dd'),
      startHours: '08:00',
      endHours: '09:00',
      teams: String(teams),
      modalityId: 1,
      placeId: 1,
      userId: 1,
      unityId: 1,
    };
    const result = await service.create(data);

    expect(result).toMatchObject(data);

    await service.remove(result.id);
  }, 7000);

  it('Find All', async () => {
    const result = await service.findAll(auth);

    result.forEach((res) => {
      expect(Object.keys(res)).toEqual(properties);
    });
  }, 5000);

  it('Find One', async () => {
    const result = await service.findOne(1);
    expect(Object.keys(result)).toEqual(properties);
  });

  it('Update', async () => {
    const data = {
      comments: 'update game',
    };
    const result = await service.update(1, data);

    expect(result).toMatchObject(data);
  });

  it('find all by userId', async () => {
    const data: FindGameDto = {
      userId: 105,
      date: '2024-07-08 03:00:00.000',
    };

    const result = await service.findAll(auth, data);

    expect(result.length).toEqual(6);
  });
});
