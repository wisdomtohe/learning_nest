import { Client } from 'src/client/entities/client.entity';
import { Company } from 'src/company/entities/company.entity';
import { Freelancer } from 'src/freelancer/entities/freelancer.entity';
import { Job } from 'src/job/entities/job.entity';
import { Message } from 'src/message/entities/message.entity';
import { PaymentType } from 'src/payment-type/entities/payment-type.entity';
import { Proposition } from 'src/proposition/entities/proposition.entity';
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
export class Contrat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle_prop: string;

  @CreateDateColumn()
  start_time: Date

  @CreateDateColumn()
  end_time: Date

  @Column()
  montant_payment: number

  @ManyToOne(() => Company, company => company.contrats)
  @JoinColumn()
  company: Company;

  @ManyToOne(() => Proposition, proposition => proposition.contrats)
  @JoinColumn()
  proposition: Proposition;

  @ManyToOne(() => Freelancer, freelancer => freelancer.contrats)
  @JoinColumn()
  freelancer: Freelancer;

  @ManyToOne(() => PaymentType, payment_type => payment_type.propositions)
  @JoinColumn()
  payment_type: PaymentType;

  constructor(data: Partial<Contrat> = {}) {
    Object.assign(this, data);
  }
}