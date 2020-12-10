import { Job } from 'src/job/entities/job.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ExpectedDuration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  duree: string;

  @OneToMany(()=> Job, job => job.expected_duration)
  @JoinColumn()
  jobs: Job[];

  constructor(data: Partial<ExpectedDuration> = {}) {
    Object.assign(this, data);
  }
}