import { IsDate, IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCompanyDto {

  @IsString()
  @IsDefined()
  name: string;

  @IsString()
  @IsDefined()
  readonly adresse: string;

}
