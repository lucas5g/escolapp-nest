import { AuthEntity } from '@/auth/entities/auth.entity';
import { UnityService } from '@/unity/unity.service';
import { googleSheets } from '@/utils/google-sheets';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  constructor(private unityService: UnityService) {}
  async findAll(auth: AuthEntity) {
    const unity = await this.unityService.findOne(auth.unityId);

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
