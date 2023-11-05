import { Profile } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

export class FindUserDto {
  @IsOptional()
  @IsEnum(Profile)
  profile: Profile;
}
