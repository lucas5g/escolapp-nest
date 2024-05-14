import { ApiProperty } from '@nestjs/swagger';
import { Type } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateModalityDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  unityId: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  membersQuantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  teamsQuantity: number;

  @IsEnum(Type)
  type: Type;
}
