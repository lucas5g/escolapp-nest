import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from '../prisma/prisma.service';
import { AuthEntity } from '../auth/entities/auth.entity';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  create(createTeamDto: CreateTeamDto) {
    return this.prisma.team.create({
      data: createTeamDto,
    });
  }

  findAll({ unity_id }: AuthEntity) {
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
