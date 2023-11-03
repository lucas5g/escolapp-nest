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
  unity_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  members_quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  teams_quantity: number;

  @IsEnum(Type)
  type: Type;
}
