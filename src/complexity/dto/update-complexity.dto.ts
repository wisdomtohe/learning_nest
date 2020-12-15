import { PartialType } from '@nestjs/mapped-types';
import { CreateComplexityDto } from './create-complexity.dto';
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateComplexityDto extends PartialType(CreateComplexityDto) {
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  readonly libelle_type: string;

}
