import { PartialType } from '@nestjs/mapped-types';
import { CreateComplexityDto } from './create-complexity.dto';

export class UpdateComplexityDto extends PartialType(CreateComplexityDto) {}
