import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthEntity } from '../auth/entities/auth.entity';

@Injectable()
export class PointService {
  constructor(private prisma: PrismaService) {}

  async findAll({ unity_id }: AuthEntity) {
    const teams = await this.prisma.team.findMany({
      where: { unity_id },
      select: {
        group: true,
        id: true,
      },
    });

    const groupsName = teams.map((team) => team.group);
    const groups = [...new Set(groupsName)].map((group) => {
      return {
        name: group,
        teams: teams
          .filter((team) => team.group === group)
          .map((team) => team.id),
      };
    });

    const games = await this.prisma.game.findMany({
      where: { unity_id },
    });

    const gamesTeams = games.map((game) => game.teams).flat();

    const points = groups
      .map((group) => {
        return {
          name: group.name,
          teams: gamesTeams.filter((gameTeam: any) =>
            group.teams.find((team) => team === gameTeam.id),
          ),
        };
      })
      .map((group, i) => {
        return {
          id: i + 1,
          name: group.name,
          totalPoints: group.teams.reduce((accumulator, currentValue: any) => {
            return accumulator + currentValue.points;
          }, 0),
        };
      })
      .sort((a, b) => (a.totalPoints > b.totalPoints ? -1 : 1));

    return points;
  }
}
