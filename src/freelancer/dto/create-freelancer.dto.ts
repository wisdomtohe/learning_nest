import { IsDate, IsDefined, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { User } from '../../user/user.entity';

export class CreateFreelancerDto {

  // @IsString()
  // @IsDefined()
  // overview: string;

  @IsDefined()
  @IsDate()
  date_registration: Date;

  @Exclude()
  user: User;

}
