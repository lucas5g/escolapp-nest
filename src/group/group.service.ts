import { Injectable } from '@nestjs/common';
import { googleSheets } from '../utils/google-sheets';
import { AuthEntity } from '../auth/entities/auth.entity';
import { UnityService } from '../unity/unity.service';

@Injectable()
export class GroupService {
  constructor(private unityService: UnityService) {}
  async findAll(auth: AuthEntity) {
    const unity = await this.unityService.findOne(auth.unityId);

    const groups = (await googleSheets({
      spreadsheetId: unity.spreedsheetId,
      range: 'G:H',
    })) as {
      turma: string;
      quantidade: number;
    }[];

    return groups
      .map((group) => {
        return {
          id: group.turma,
          name: group.turma,
          quantity: group.quantidade,
        };
      })
      .filter((group) => !!group.id);
  }
}
