import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class FindPointDto {
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  unity_id: number;
}
