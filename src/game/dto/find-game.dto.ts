import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class FindGameDto {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  unity_id: number;
}
