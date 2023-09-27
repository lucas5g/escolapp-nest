import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class FindGroupDto {
  @ApiProperty()
  @IsNotEmpty()
  unity: string;
}
