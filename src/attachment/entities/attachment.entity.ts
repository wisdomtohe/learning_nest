import { Client } from 'src/client/entities/client.entity';
import { Contrat } from 'src/contrat/entities/contrat.entity';
import { Message } from 'src/message/entities/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adresse: string;

  @ManyToOne(() => Message, message => message.attachments)
  @JoinColumn()
  message: Message;

  constructor(data: Partial<Attachment> = {}) {
    Object.assign(this, data);
  }
}