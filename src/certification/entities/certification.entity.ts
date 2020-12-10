import { Freelancer } from 'src/freelancer/entities/freelancer.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Certification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_cert: string;

  @Column()
  provider: string;

  @Column()
  description: string;

  @Column()
  link_cert: string;

  @CreateDateColumn()
  date_earned: Date;

  @ManyToOne(() => Freelancer, freelancer => freelancer.certifications)
  @JoinColumn()
  freelancer: Freelancer;

  constructor(data: Partial<Certification> = {}) {
    Object.assign(this, data);
  }
}