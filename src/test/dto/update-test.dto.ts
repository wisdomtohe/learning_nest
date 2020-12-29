import { PartialType } from '@nestjs/mapped-types';
import { CreateTestDto } from './create-test.dto';
import { IsDefined, IsOptional, IsString } from 'class-validator';

export class UpdateTestDto extends PartialType(CreateTestDto) {
  @IsDefined()
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsDefined()
  @IsString()
  @IsOptional()
  readonly description: string;

  @IsDefined()
  @IsString()
  @IsOptional()
  readonly link_test: string;
}
