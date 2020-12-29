import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly level: string;
}
