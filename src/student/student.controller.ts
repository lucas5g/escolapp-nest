import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthEntity } from 'src/auth/entities/auth.entity';

@ApiTags('Students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(@Auth() auth: AuthEntity) {
    return this.studentService.findAll(auth);
  }
}
