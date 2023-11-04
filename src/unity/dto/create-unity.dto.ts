import { IsNotEmpty } from 'class-validator';

export class CreateUnityDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  spreedsheetId: string
}
