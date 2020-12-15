import { IsDate, IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateComplexityDto {
  @IsString()
  libelle_type: string;
}
