export class CreateExpectedDurationDto {
  @IsString()
  @IsDefined()
  duree: string;
}
