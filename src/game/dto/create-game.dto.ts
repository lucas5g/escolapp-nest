import { IsArray } from "class-validator"

export class CreateGameDto {
  date: Date 
  startHours: string 
  endHours: string 
  comments?: string
  
  @IsArray()
  teams: string[]
  place_id:number 
  modality_id: number 
  user_id: number 

}
