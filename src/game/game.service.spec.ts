import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { Game } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameService, PrismaService],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('Create', async() => {
    const data = {
      date: new Date(),
      startHours: '08:00',
      endHours: '09:00',
      teams: ["C123123","C321321"],
      modality_id:1,
      place_id:1,
      user_id:1
    } 
    const result = await service.create(data)

    expect(result).toMatchObject(data)

    await service.remove(result.id)

  });

  it.only('Find All', async() => {
    const result = await service.findAll()
    result.forEach(row => {
      expect(row).toHaveProperty('date')
    })
  })
});
