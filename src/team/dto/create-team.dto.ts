import { IsNotEmpty } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  group: string;
  genre: 'misto' | 'mas' | 'fem';
  modality_id: number;
  unity_id: number;
}
