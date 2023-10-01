import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
// import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindTeamDto } from './dto/find-team.dto';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) { }

  create(createTeamDto: CreateTeamDto) {

    const { students } = createTeamDto
    delete createTeamDto.students

    return this.prisma.team.create({
      data: {
        ...createTeamDto,
        students: {
          create: students.map(student => ({ student_ra: student }))
        }
      },
    });
  }

  findAll({ unity_id }: FindTeamDto) {
    return this.prisma.team.findMany({
      where: { unity_id },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} team`;
  // }

  // update(id: number, updateTeamDto: UpdateTeamDto) {
  //   return `This action updates a #${id} team`;
  // }

  async remove(id: number) {

    await this.prisma.teamStudent.deleteMany({
      where: {
        team_id: id
      }
    })

    return this.prisma.team.delete({      
      where: {id},
    });
  }
}
