import { Controller, Get, Query } from '@nestjs/common';
import { StudentService } from './student.service';

import { FindGroupDto } from '../group/dto/find-group.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(@Query() findGroupDto: FindGroupDto) {
    return this.studentService.findAll(findGroupDto);
  }
}
