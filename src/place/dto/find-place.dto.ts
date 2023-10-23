import { Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class FindPlaceDto {
  @IsNotEmpty()
  @Transform(({value}) => Number(value))
  unity_id: number;
}
