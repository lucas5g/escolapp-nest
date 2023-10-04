import { Genre } from '@prisma/client';
import { IsArray, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  group: string;

  @IsEnum(Genre)
  genre: Genre;

  @IsNumber()
  modality_id: number;

  @IsNumber()
  unity_id: number;

  @IsArray()
  students: string[];
}
