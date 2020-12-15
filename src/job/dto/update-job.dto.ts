import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';

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
