import { PartialType } from '@nestjs/mapped-types';
import { CreateExpectedDurationDto } from './create-expected-duration.dto';

export class UpdateExpectedDurationDto extends PartialType(CreateExpectedDurationDto) {}
