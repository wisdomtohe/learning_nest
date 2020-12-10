import { Attachment } from 'src/attachment/entities/attachment.entity';
import { Client } from 'src/client/entities/client.entity';
import { Freelancer } from 'src/freelancer/entities/freelancer.entity';
import { Job } from 'src/job/entities/job.entity';
import { PaymentType } from 'src/payment-type/entities/payment-type.entity';
import { Proposition } from 'src/proposition/entities/proposition.entity';
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
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle_prop: string;

  @CreateDateColumn()
  sent_time: Date

  @Column()
  contenu_message: string

  @Column()
  freelancer_comment: string

  @OneToMany(()=> Attachment, attachment => attachment.message)
  @JoinColumn()
  attachments: Attachment[];

  @ManyToOne(() => Freelancer, freelancer => freelancer.messages)
  @JoinColumn()
  freelancer: Freelancer;

  @ManyToOne(() => Client, client => client.messages)
  @JoinColumn()
  client: Client;

  @ManyToOne(() => StatutProposition, statut_proposition => statut_proposition.messages)
  @JoinColumn()
  statut_proposition: StatutProposition;

  @ManyToOne(() => Proposition, proposition => proposition.messages)
  @JoinColumn()
  proposition: Proposition;

  constructor(data: Partial<Message> = {}) {
    Object.assign(this, data);
  }
}