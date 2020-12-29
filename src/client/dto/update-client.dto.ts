import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsDate, IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Company } from '../../company/entities/company.entity';
import { Exclude } from 'class-transformer';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @IsOptional()
  readonly rating: number;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @IsOptional()
  readonly hired_number: number;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @IsOptional()
  readonly job_posted_number: number;

  @IsNotEmpty()
  @IsDefined()
  @IsNumber()
  @IsOptional()
  readonly total_money_spent: number;

  @IsNotEmpty()
  @IsDefined()
  @IsOptional()
  readonly adresse: string;

  @Exclude()
  @IsOptional()
  company: Company;

}
