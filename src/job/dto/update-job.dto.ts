import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ExpectedDuration } from '../../expected-duration/entities/expected-duration.entity';
import { Complexity } from '../../complexity/entities/complexity.entity';
import { Skill } from '../../skill/entities/skill.entity';
import { PaymentType } from '../../payment-type/entities/payment-type.entity';
import { Client } from '../../client/entities/client.entity';
import { Proposition } from '../../proposition/entities/proposition.entity';

export class UpdateJobDto extends PartialType(CreateJobDto) {
  @IsOptional()
  @IsString()
  descripion: string;

  @IsOptional()
  @IsNumber()
  montant_payment: number;

  @IsOptional()
  expected_duration: ExpectedDuration;

  @IsOptional()
  complexity: Complexity;

  @IsOptional()
  main_skill: Skill;

  @IsOptional()
  payment_type: PaymentType;

  @IsOptional()
  client: Client;

  @IsOptional()
  propositions: Proposition[];

  @IsOptional()
  other_skills: Skill[];
}
