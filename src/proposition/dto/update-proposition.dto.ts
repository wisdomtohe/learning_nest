import { PartialType } from '@nestjs/mapped-types';
import { CreatePropositionDto } from './create-proposition.dto';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Message } from '../../message/entities/message.entity';
import { Job } from '../../job/entities/job.entity';
import { StatutProposition } from '../../statut-proposition/entities/statut-proposition.entity';
import { PaymentType } from '../../payment-type/entities/payment-type.entity';
import { Contrat } from '../../contrat/entities/contrat.entity';

export class UpdatePropositionDto extends PartialType(CreatePropositionDto) {
  @IsString()
  @IsOptional()
  readonly libelle_prop: string;

  @IsDate()
  @IsOptional()
  readonly proposition_time: Date

  @IsNumber()
  @IsOptional()
  readonly montant_payment: number

  @IsString()
  @IsOptional()
  readonly statut_actuel_proposition: string

  @IsString()
  @IsOptional()
  readonly client_comment: string

  @IsString()
  @IsOptional()
  readonly freelancer_comment: string

  @Exclude()
  @IsOptional()
  messages: Message[];

  @Exclude()
  @IsOptional()
  job: Job;

  @Exclude()
  @IsOptional()
  statut_proposition: StatutProposition;

  @Exclude()
  @IsOptional()
  payment_type: PaymentType;

  @Exclude()
  @IsOptional()
  contrats: Contrat[];
}
