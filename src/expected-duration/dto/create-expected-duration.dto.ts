import { IsDefined, IsString } from 'class-validator';

export class CreateExpectedDurationDto {
  @IsString()
  @IsDefined()
  duree: string;
}
