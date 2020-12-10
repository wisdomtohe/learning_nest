import { Client } from 'src/client/entities/client.entity';
import { Complexity } from 'src/complexity/entities/complexity.entity';
import { ExpectedDuration } from 'src/expected-duration/entities/expected-duration.entity';
import { PaymentType } from 'src/payment-type/entities/payment-type.entity';
import { Proposition } from 'src/proposition/entities/proposition.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripion: string;

  @Column()
  montant_payment: number;

  @ManyToOne(() => ExpectedDuration, expected_duration => expected_duration.jobs)
  @JoinColumn()
  expected_duration: ExpectedDuration;

  @ManyToOne(() => Complexity, complexity => complexity.jobs)
  @JoinColumn()
  complexity: Complexity;

  @ManyToOne(() => Skill, main_kill => main_kill.jobs)
  @JoinColumn()
  main_skill: Skill;

  @ManyToOne(() => PaymentType, payment_type => payment_type.jobs)
  @JoinColumn()
  payment_type: PaymentType;

  @ManyToOne(() => Client, client => client.jobs)
  @JoinColumn()
  client: Client;

  @OneToMany(()=> Proposition, proposition => proposition.job)
  @JoinColumn()
  propositions: Proposition[];

  @ManyToMany(type => Skill, skill => skill.jobs)
  @JoinTable({
    name: 'other_skills',
    joinColumn:{
      name: 'id_job',
      referencedColumnName: 'id'
    },
    inverseJoinColumn:{
      name: 'id_skill',
      referencedColumnName: 'id'
    }
  })
  other_skills: Skill[];

  constructor(data: Partial<Job> = {}) {
    Object.assign(this, data);
  }
}