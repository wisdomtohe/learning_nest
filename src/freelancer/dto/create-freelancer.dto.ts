export class CreateFreelancerDto {
  
  @IsString()
  @IsDefined
  overview: string;

  @IsDefined()
  @IsDate()
  date_registration: Date;

  @Exclude()
  user: User;

}
