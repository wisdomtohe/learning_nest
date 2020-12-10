import { Client } from 'src/client/entities/client.entity';
import { Contrat } from 'src/contrat/entities/contrat.entity';
import { Job } from 'src/job/entities/job.entity';
import { Message } from 'src/message/entities/message.entity';
import { PaymentType } from 'src/payment-type/entities/payment-type.entity';
import { StatutProposition } from 'src/statut-proposition/entities/statut-proposition.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Proposition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle_prop: string;

  @CreateDateColumn()
  proposition_time: Date

  @Column()
  montant_payment: number

  @Column()
  statut_actuel_proposition: string

  @Column()
  client_comment: string

  @Column()
  freelancer_comment: string

  @OneToMany(()=> Message, message => message.proposition)
  @JoinColumn()
  messages: Message[];

  @ManyToOne(() => Job, job => job.propositions)
  @JoinColumn()
  job: Job;

  @ManyToOne(() => StatutProposition, statut_proposition => statut_proposition.propositions)
  @JoinColumn()
  statut_proposition: StatutProposition;

  @ManyToOne(() => PaymentType, payment_type => payment_type.propositions)
  @JoinColumn()
  payment_type: PaymentType;

  @OneToMany(()=> Contrat, contrat => contrat.proposition)
  @JoinColumn()
  contrats: Contrat[];

  constructor(data: Partial<Proposition> = {}) {
    Object.assign(this, data);
  }
}