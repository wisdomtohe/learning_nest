import { Certification } from 'src/certification/entities/certification.entity';
import { Contrat } from 'src/contrat/entities/contrat.entity';
import { Message } from 'src/message/entities/message.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import { TestResult } from 'src/test-result/entities/test-result.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Freelancer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  job_done_rating: number;

  @Column()
  overview: string;

  @CreateDateColumn()
  date_registration: Date;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @OneToMany(()=> Certification, certification => certification.freelancer)
  @JoinColumn()
  certifications: Certification[];

  @OneToMany(()=> TestResult, test_result => test_result.freelancer)
  @JoinColumn()
  test_results: TestResult[];

  @OneToMany(()=> Message, message => message.proposition)
  @JoinColumn()
  messages: Message[];

  @OneToMany(()=> Contrat, contrat => contrat.freelancer)
  @JoinColumn()
  contrats: Contrat[];

  @ManyToMany(type => Skill, skill => skill.freelancers)
  @JoinTable({
    name: 'freelancer_has_skill',
    joinColumn:{
      name: 'id_freelancer',
      referencedColumnName: 'id'
    },
    inverseJoinColumn:{
      name: 'id_skill',
      referencedColumnName: 'id'
    }
  })
  skillls: Skill[];

  constructor(data: Partial<Freelancer> = {}) {
    Object.assign(this, data);
  }
}