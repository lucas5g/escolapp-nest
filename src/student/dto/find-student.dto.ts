import { IsNotEmpty } from "class-validator";

export class FindStudentDto {
  @IsNotEmpty()
  unity: string
}
