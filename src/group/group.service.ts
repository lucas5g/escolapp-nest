import { Injectable } from '@nestjs/common';
import { googleSheets } from '../utils/google-sheets';
import { FindGroupDto } from './dto/find-group.dto';

@Injectable()
export class GroupService {
  async findAll({ unity }: FindGroupDto) {
    const groups = (await googleSheets({ range: `${unity}!G:H` })) as {
      turma: string;
      quantidade: number;
    }[];
    return groups.map((group) => {
      return {
        name: group.turma,
        quantity: group.quantidade,
      };
    });
  }
}
