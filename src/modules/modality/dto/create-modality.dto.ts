import { IsNotEmpty } from "class-validator"

export class CreateModalityDto {
  @IsNotEmpty()
  name: string 

  @IsNotEmpty()
  unity_id: number

  @IsNotEmpty()
  members_quantity: number

  @IsNotEmpty()
  teams_quantity: number
}
