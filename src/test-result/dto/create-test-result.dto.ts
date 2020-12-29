import { IsBoolean, IsDate, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Freelancer } from '../../freelancer/entities/freelancer.entity';
import { Test } from '../../test/entities/test.entity';

export class CreateTestResultDto {
  @IsString()
  readonly score: string;

  @IsString()
  readonly link_test_result: string;

  @IsBoolean()
  readonly display_on_profile: boolean;

  @IsDate()
  readonly start_time: Date;

  @IsDate()
  end_time: Date;

  @Exclude()
  freelancer: Freelancer;

  @Exclude()
  test: Test;
}
