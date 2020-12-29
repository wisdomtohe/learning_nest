  import { IsDate, IsDefined, IsNotEmpty, IsNumber } from "class-validator";
  import { Exclude } from 'class-transformer';
  import { User } from '../../user/user.entity';
  import { Company } from '../../company/entities/company.entity';

export class CreateClientDto {

  @IsNotEmpty()
  @IsDefined()
  readonly adresse: string;

  @IsDate()
  @IsDefined()
  readonly date_registration: Date;

  @Exclude()
  user: User;

  @Exclude()
  company: Company;

}
