import { AuthEntity } from '@/auth/entities/auth.entity';
import { CreateGameDto } from '@/game/dto/create-game.dto';
import { FindGameDto } from '@/game/dto/find-game.dto';
import { UpdateGameDto } from '@/game/dto/update-game.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGameDto: CreateGameDto) {
    return this.prisma.game.create({
      data: createGameDto,
    });
  }

  findAll({ unityId }: AuthEntity, findGameDto?: FindGameDto) {
    return this.prisma.game.findMany({
      where: {
        unityId,
        ...findGameDto,
      },
      orderBy: {
        date: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.game.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.prisma.game.update({
      where: { id },
      data: updateGameDto,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
