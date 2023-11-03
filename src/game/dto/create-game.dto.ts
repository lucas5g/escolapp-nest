import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';

class TeamDto {
  @IsInt()
  id: number;

  @IsInt()
  goals: number;

  @IsInt()
  points: number;

  @IsInt()
  fairPlay: number
}

export class CreateGameDto {
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  date: Date;

  @IsNotEmpty()
  startHours: string;

  @IsNotEmpty()
  endHours: string;

  @IsOptional()
  comments?: string;

  @IsInt()
  place_id: number;

  @IsNotEmpty()
  modality_id: number;

  @IsNotEmpty()
  user_id: number;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => TeamDto)
  teams: string;

  @IsInt()
  unity_id: number;
}
