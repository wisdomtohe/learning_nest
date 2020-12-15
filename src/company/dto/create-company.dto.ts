import { IsDate, IsDefined, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCompanyDto {

  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  readonly adresse: string;

}
