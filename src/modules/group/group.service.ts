import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { googleSheets } from '../../libs/google-sheets';
import { FindGroupDto } from './dto/find-group.dto';

@Injectable()
export class GroupService {
  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }

  async findAll({unity}: FindGroupDto) {
    const groups = await googleSheets({range: `${unity}!G:H`}) as {turma:string, quantidade: number}[];
    return groups.map(group => {
      return {
        name: group.turma,
        quantity: group.quantidade
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
