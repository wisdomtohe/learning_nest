import { Column, CreateDateColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Message } from '../../message/entities/message.entity';
import { Job } from '../../job/entities/job.entity';
import { StatutProposition } from '../../statut-proposition/entities/statut-proposition.entity';
import { PaymentType } from '../../payment-type/entities/payment-type.entity';
import { Contrat } from '../../contrat/entities/contrat.entity';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class CreatePropositionDto {
  @IsString()
  readonly libelle_prop: string;

  @IsDate()
  readonly proposition_time: Date

  @IsNumber()
  readonly montant_payment: number

  @IsString()
  readonly statut_actuel_proposition: string

  @IsString()
  readonly client_comment: string

  @IsString()
  readonly freelancer_comment: string

  @Exclude()
  messages: Message[];

  @Exclude()
  job: Job;

  @Exclude()
  statut_proposition: StatutProposition;

  @Exclude()
  payment_type: PaymentType;

  @Exclude()
  contrats: Contrat[];
}
