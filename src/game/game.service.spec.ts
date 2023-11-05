import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { Game } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from 'src/auth/entities/auth.entity';

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
      date: new Date(),
      startHours: '08:00',
      endHours: '09:00',
      teams: String(teams),
      modality_id: 1,
      place_id: 1,
      user_id: 1,
      unity_id: 1,
    };
    const result = await service.create(data);

    expect(result).toMatchObject(data);

    await service.remove(result.id);
  });

  it('Find All', async () => {
    const auth = {
      unity_id: 1,
    } as AuthEntity;
    const result = await service.findAll(auth);

    testList(result[0]);
  });

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
