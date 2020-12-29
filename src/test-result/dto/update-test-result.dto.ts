import { PartialType } from '@nestjs/mapped-types';
import { CreateTestResultDto } from './create-test-result.dto';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Freelancer } from '../../freelancer/entities/freelancer.entity';
import { Test } from '../../test/entities/test.entity';

export class UpdateTestResultDto extends PartialType(CreateTestResultDto) {
  @IsString()
  @IsOptional()
  readonly score: string;

  @IsString()
  @IsOptional()
  readonly link_test_result: string;

  @IsBoolean()
  @IsOptional()
  readonly display_on_profile: boolean;

  @IsDate()
  @IsOptional()
  readonly start_time: Date;

  @IsDate()
  @IsOptional()
  end_time: Date;
}
