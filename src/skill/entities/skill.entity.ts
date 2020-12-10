import { Freelancer } from 'src/freelancer/entities/freelancer.entity';
import { Job } from 'src/job/entities/job.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinTable,
    ManyToMany,
    JoinColumn,
    OneToMany,
  } from 'typeorm';
  
  @Entity()
  export class Skill {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    level: string;

    @OneToMany(()=> Job, job => job.main_skill)
    @JoinColumn()
    jobs: Job[];

    @ManyToMany(type => Freelancer, freelancer => freelancer.skillls)
    @JoinTable({
      name: 'freelancer_has_skill',
      joinColumn:{
        name: 'id_skill',
        referencedColumnName: 'id'
      },
      inverseJoinColumn:{
        name: 'id_freelancer',
        referencedColumnName: 'id'
      }
    })
    freelancers: Freelancer[];

    @ManyToMany(type => Job, job => job.other_skills)
    @JoinTable({
      name: 'other_skills',
      joinColumn:{
        name: 'id_skill',
        referencedColumnName: 'id'
      },
      inverseJoinColumn:{
        name: 'id_job',
        referencedColumnName: 'id'
      }
    })
    other_jobs: Job[];
  
    constructor(data: Partial<Skill> = {}) {
      Object.assign(this, data);
    }
  }