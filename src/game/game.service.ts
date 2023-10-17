import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameService {

  constructor(private prisma: PrismaService ){}

  create(createGameDto: CreateGameDto) {
    return this.prisma.game.create({
      data:createGameDto
    });
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where:{id}
    });
  }
}
