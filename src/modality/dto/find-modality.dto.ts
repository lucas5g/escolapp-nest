import { IsNotEmpty } from "class-validator";
import { Transform } from 'class-transformer'

export class FindModalityDto{
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  unity_id:number
}