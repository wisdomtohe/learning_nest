import { TestResult } from 'src/test-result/entities/test-result.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  link_test: string;

  @CreateDateColumn()
  date_registration: Date;

  @OneToMany(()=> TestResult, test_result => test_result.test)
  @JoinColumn()
  test_results: TestResult[];

  constructor(data: Partial<Test> = {}) {
    Object.assign(this, data);
  }
}