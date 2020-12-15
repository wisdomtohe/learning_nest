import { IsDate, IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateCertificationDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly name_cert: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly provider: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly link_cert: string;

  @IsDefined()
  @IsDate()
  readonly date_earned: Date;
}
