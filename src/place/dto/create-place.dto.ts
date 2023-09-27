import { IsNotEmpty } from 'class-validator';

export class CreatePlaceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  unity_id: number;
}
