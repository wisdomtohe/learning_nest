import { IsDate, IsDefined, IsNumber, IsString } from 'class-validator';
import { Company } from '../../company/entities/company.entity';
import { Proposition } from '../../proposition/entities/proposition.entity';
import { PaymentType } from '../../payment-type/entities/payment-type.entity';

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
