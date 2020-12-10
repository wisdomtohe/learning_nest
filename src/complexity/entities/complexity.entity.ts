import { Job } from 'src/job/entities/job.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Complexity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  libelle_type: string;

  @OneToMany(()=> Job, job => job.complexity)
  @JoinColumn()
  jobs: Job[];

  constructor(data: Partial<Complexity> = {}) {
    Object.assign(this, data);
  }
}