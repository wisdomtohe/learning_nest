import { Client } from 'src/client/entities/client.entity';
import { Contrat } from 'src/contrat/entities/contrat.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  adresse: string;

  @OneToMany(()=> Client, client => client.company)
  @JoinColumn()
  clients: Client[];

  @OneToMany(()=> Contrat, contrat => contrat.company)
  @JoinColumn()
  contrats: Contrat[];

  constructor(data: Partial<Company> = {}) {
    Object.assign(this, data);
  }
}