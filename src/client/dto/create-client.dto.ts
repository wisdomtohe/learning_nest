  import { IsDate, IsDefined, IsNotEmpty, IsNumber } from "class-validator";

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
