import { UpdateUserDto } from '@/user/dto/update-user.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateMeAuthDto extends OmitType(UpdateUserDto, [
  'email',
  'profile',
]) {}
