import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentTypeDto } from './create-payment-type.dto';
import { IsDefined, IsOptional, IsString } from 'class-validator';

export class UpdatePaymentTypeDto extends PartialType(CreatePaymentTypeDto) {
  @IsString()
  @IsOptional()
  @IsDefined()
  readonly label: string;
}
