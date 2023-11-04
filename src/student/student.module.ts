import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { UnityModule } from 'src/unity/unity.module';

@Module({
  imports: [UnityModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
