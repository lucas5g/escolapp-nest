import { Injectable } from '@nestjs/common';
import { FindStudentDto } from './dto/find-student.dto';
import { googleSheets } from 'src/utils/google-sheets';

@Injectable()
export class StudentService {
  async findAll({ unity }: FindStudentDto) {
    const students = (await googleSheets({ range: `${unity}!A:D` })) as {
      ra: string;
      nome: string;
      turma: string;
    }[];

    return students.map((student) => {
      return {
        ra: student.ra,
        name: student.nome,
        group: student.turma,
      };
    });
  }
}
