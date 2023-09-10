import { IsNotEmpty } from "class-validator"

export class CreateModalityDto {
  @IsNotEmpty()
  name: string 

  @IsNotEmpty()
  unity_id: number
}
