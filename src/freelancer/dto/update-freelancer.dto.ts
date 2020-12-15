import { PartialType } from '@nestjs/mapped-types';
import { CreateFreelancerDto } from './create-freelancer.dto';

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
