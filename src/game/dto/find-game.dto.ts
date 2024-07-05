import { Type } from 'class-transformer';
export class FindGameDto {
  @Type(() => Number)
  userId: number;

  @Type(() => Date)
  date: string;
}
