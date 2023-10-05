import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindTeamDto } from './dto/find-team.dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return this.prisma.team.create({
      data: createTeamDto,
    });
  }

  findAll({ unity_id }: FindTeamDto) {
    return this.prisma.team.findMany({
      where: { unity_id },
    });
  }

  findOne(id: number) {
    return this.prisma.team.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return this.prisma.team.update({
      where: { id },
      data: updateTeamDto,
    });
  }

  async remove(id: number) {
    return this.prisma.team.delete({
      where: { id },
    });
  }
}
