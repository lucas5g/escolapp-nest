import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Matches,
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
  @Matches(/^\d{4}-\d{2}-\d{2}(T.*)?$/, {
    message: 'Data deve ter ano com 4 dígitos',
  })
  @IsDateString({}, { message: 'Data deve ser uma data ISO-8601 válida' })
  date: string;

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
