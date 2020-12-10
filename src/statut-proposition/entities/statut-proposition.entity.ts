import { Client } from 'src/client/entities/client.entity';
import { Message } from 'src/message/entities/message.entity';
import { Proposition } from 'src/proposition/entities/proposition.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class StatutProposition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle: string;

  @OneToMany(()=> Proposition, proposition => proposition.statut_proposition)
  @JoinColumn()
  propositions: Proposition[];

  @OneToMany(()=> Message, message => message.proposition)
  @JoinColumn()
  messages: Message[];

  constructor(data: Partial<StatutProposition> = {}) {
    Object.assign(this, data);
  }
}