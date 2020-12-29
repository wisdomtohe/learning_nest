import { PartialType } from '@nestjs/mapped-types';
import { CreateExpectedDurationDto } from './create-expected-duration.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateExpectedDurationDto extends PartialType(CreateExpectedDurationDto) {
  @IsOptional()
  @IsString()
  readonly duree: string;
}
