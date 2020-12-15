import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateCertificationDto } from './create-certification.dto';

export class UpdateCertificationDto extends PartialType(CreateCertificationDto) {
  @IsDefined()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly name_cert: string;

  @IsDefined()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly provider: string;

  @IsDefined()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsDefined()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly link_cert: string;

  @IsDefined()
  @IsOptional()
  @IsDate()
  readonly date_earned: Date;
}
