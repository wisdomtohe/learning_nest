import { Contrat } from 'src/contrat/entities/contrat.entity';
import { Job } from 'src/job/entities/job.entity';
import { Proposition } from 'src/proposition/entities/proposition.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    OneToMany,
  } from 'typeorm';
  
  @Entity()
  export class PaymentType {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    label: string;

    @OneToMany(()=> Job, job => job.payment_type)
    @JoinColumn()
    jobs: Job[];

    @OneToMany(()=> Proposition, proposition => proposition.payment_type)
    @JoinColumn()
    propositions: Proposition[];

    @OneToMany(()=> Contrat, contrat => contrat.payment_type)
    @JoinColumn()
    contrats: Contrat[];
  
    constructor(data: Partial<PaymentType> = {}) {
      Object.assign(this, data);
    }
  }