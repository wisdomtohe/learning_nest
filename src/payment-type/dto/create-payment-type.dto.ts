export class CreatePaymentTypeDto {
  @IsString()
  readonly label: string;
}
