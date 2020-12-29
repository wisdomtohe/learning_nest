import { PartialType } from '@nestjs/mapped-types';
import { CreateStatutPropositionDto } from './create-statut-proposition.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStatutPropositionDto extends PartialType(CreateStatutPropositionDto) {
  @IsString()
  @IsOptional()
  readonly libelle: string;
}
