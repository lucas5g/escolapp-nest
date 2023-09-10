import { IsNotEmpty } from "class-validator";

export class FindGroupDto{
  @IsNotEmpty()
  unity:string
}