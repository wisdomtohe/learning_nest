import { IsString } from 'class-validator';

export class CreatePaymentTypeDto {
  @IsString()
  readonly label: string;
}
