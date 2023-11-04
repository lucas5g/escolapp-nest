import { Injectable } from '@nestjs/common';
import { googleSheets } from '../utils/google-sheets';
import { AuthEntity } from 'src/auth/entities/auth.entity';
import { UnityService } from 'src/unity/unity.service';

@Injectable()
export class GroupService {
  constructor(private unityService: UnityService) {}
  async findAll(auth: AuthEntity) {
    const unity = await this.unityService.findOne(auth.unity_id);

    const groups = (await googleSheets({
      spreadsheetId: unity.spreedsheetId,
      range: 'G:H',
    })) as {
      turma: string;
      quantidade: number;
    }[];
    return groups.map((group, i) => {
      return {
        id: group.turma,
        name: group.turma,
        quantity: group.quantidade,
      };
    })
  }
}
