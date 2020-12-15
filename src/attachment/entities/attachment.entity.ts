import { Message } from 'src/message/entities/message.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  link_attachment: string;

  @ManyToOne(() => Message, message => message.attachments)
  @JoinColumn()
  message: Message;

  constructor(data: Partial<Attachment> = {}) {
    Object.assign(this, data);
  }
}