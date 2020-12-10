import { PartialType } from '@nestjs/mapped-types';
import { CreateStatutPropositionDto } from './create-statut-proposition.dto';

export class UpdateStatutPropositionDto extends PartialType(CreateStatutPropositionDto) {}
