import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateModalityDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  unity_id: number;

  @ApiProperty()
  @IsNotEmpty()
  members_quantity: number;

  @ApiProperty()
  @IsNotEmpty()
  teams_quantity: number;
}
