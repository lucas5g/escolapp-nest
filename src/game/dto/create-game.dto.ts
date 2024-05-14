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
  fairPlay: number;
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
  placeId: number;

  @IsNotEmpty()
  modalityId: number;

  @IsNotEmpty()
  userId: number;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => TeamDto)
  teams: string;

  @IsInt()
  unityId: number;
}
