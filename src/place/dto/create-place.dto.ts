import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  unityId: number;
}
