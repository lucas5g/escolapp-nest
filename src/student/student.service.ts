import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FindStudentDto } from './dto/find-student.dto';
import { googleSheets } from 'src/utils/google-sheets';

@Injectable()
export class StudentService {

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  async findAll({ unity }: FindStudentDto) {

    const students = await googleSheets({ range: `${unity}!A:D` }) as { ra: string, nome: string, turma: string }[]
    
    return students.map(student => {
      return {
        ra: student.ra,
        name: student.nome,
        group: student.turma
      }
    })
  }


  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
