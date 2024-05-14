import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSetupDto {
  @IsOptional()
  documentLink: string;
  @IsNotEmpty()
  unityId: number;
}
