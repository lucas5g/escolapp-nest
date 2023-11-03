import { IsNotEmpty } from "class-validator";

export class FindPointDto {
  @IsNotEmpty()
  unity_id:number
}