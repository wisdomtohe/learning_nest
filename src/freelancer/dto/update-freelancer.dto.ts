import { PartialType } from '@nestjs/mapped-types';
import { CreateFreelancerDto } from './create-freelancer.dto';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';
import { Certification } from '../../certification/entities/certification.entity';
import { TestResult } from '../../test-result/entities/test-result.entity';
import { Message } from '../../message/entities/message.entity';
import { Contrat } from '../../contrat/entities/contrat.entity';
import { Skill } from '../../skill/entities/skill.entity';

export class UpdateFreelancerDto extends PartialType(CreateFreelancerDto) {
  @IsDefined()
  @IsNumber()
  @IsOptional()
  readonly rating: number;

  @IsDefined()
  @IsNumber()
  @IsOptional()
  readonly job_done_rating: number;

  @IsDefined()
  @IsOptional()
  @IsString()
  readonly overview: string;

  @IsOptional()
  certifications: Certification[];

  @IsOptional()
  test_results: TestResult[];

  @IsOptional()
  messages: Message[];

  @IsOptional()
  contrats: Contrat[];

  @IsOptional()
  skillls: Skill[];
}
