export class CreateContratDto {
  @IsDefined()
  @IsString()
  libelle_prop: string;

  @IsDefined()
  @IsDate()
  start_time: Date

  @IsDefined()
  @IsDate()
  end_time: Date

  @IsDefined()
  @IsNumber()
  montant_payment: number

  
  company: Company;

  
  proposition: Proposition;

  reelancer;

  
  payment_type: PaymentType;
}
