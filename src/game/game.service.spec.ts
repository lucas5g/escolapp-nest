import { GameService } from '@/game/game.service';
import { PrismaService } from '@/prisma/prisma.service';
import { auth } from '@/utils/test';
import { Test, TestingModule } from '@nestjs/testing';
import { Game } from '@prisma/client';
import { format } from 'date-fns';
describe('GameService', () => {
  let service: GameService;

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

    testList(result[0]);
  }, 5000);

  it('Find One', async () => {
    const result = await service.findOne(1);
    testList(result);
  });

  it('Update', async () => {
    const data = {
      comments: 'update game',
    };
    const result = await service.update(1, data);

    expect(result).toMatchObject(data);
  });
});

function testList(result: Game) {
  ['date', 'teams'].forEach((property) => {
    expect(result).toHaveProperty(property);
  });
}
