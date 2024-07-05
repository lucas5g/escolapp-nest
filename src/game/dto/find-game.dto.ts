import { Type } from 'class-transformer';
import { IsDateString, IsOptional } from 'class-validator';
export class FindGameDto {
  @IsOptional()
  @Type(() => Number)
  userId: number;

  @IsOptional()
  @IsDateString()
  date: string;
}
