import { Freelancer } from 'src/freelancer/entities/freelancer.entity';
import { Test } from 'src/test/entities/test.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class TestResult {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: string;

  @Column()
  link_test_result: string;

  @Column()
  display_on_profile: boolean;

  @CreateDateColumn()
  start_time: Date;

  @CreateDateColumn()
  end_time: Date;

  @ManyToOne(() => Freelancer, freelancer => freelancer.test_results)
  @JoinColumn()
  freelancer: Freelancer;

  @ManyToOne(() => Test, test => test.test_results)
  @JoinColumn()
  test: Test;

  constructor(data: Partial<TestResult> = {}) {
    Object.assign(this, data);
  }
}