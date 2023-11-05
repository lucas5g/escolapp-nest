import { Injectable } from '@nestjs/common';
import { googleSheets } from 'src/utils/google-sheets';
import { AuthEntity } from 'src/auth/entities/auth.entity';
import { UnityService } from 'src/unity/unity.service';

@Injectable()
export class StudentService {
  constructor(private unityService: UnityService) {}
  async findAll(auth: AuthEntity) {
    const unity = await this.unityService.findOne(auth.unity_id);

    const students = (await googleSheets({
      spreadsheetId: unity.spreedsheetId,
      range: 'A:D',
    })) as {
      ra: string;
      nome: string;
      turma: string;
    }[];

    return students
      .map((student) => {
        return {
          ra: student.ra,
          name: student.nome,
          group: student.turma,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
