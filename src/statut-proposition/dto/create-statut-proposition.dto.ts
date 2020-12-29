import { IsString } from 'class-validator';

export class CreateStatutPropositionDto {
  @IsString()
  readonly libelle: string;
}
