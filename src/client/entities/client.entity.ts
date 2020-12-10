import { Company } from 'src/company/entities/company.entity';
import { Job } from 'src/job/entities/job.entity';
import { Message } from 'src/message/entities/message.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  hired_number: number;

  @Column()
  job_posted_number: number;

  @Column()
  total_money_spent: number;

  @Column()
  overview: string;

  @CreateDateColumn()
  date_registration: Date;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Company, company => company.clients)
  @JoinColumn()
  company: Company;

  @OneToMany(()=> Message, message => message.proposition)
  @JoinColumn()
  messages: Message[];

  @OneToMany(()=> Job, job => job.client)
  @JoinColumn()
  jobs: Job[];

  constructor(data: Partial<Client> = {}) {
    Object.assign(this, data);
  }
}