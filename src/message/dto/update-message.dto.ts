import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDto } from './create-message.dto';

export class UpdateMessageDto extends PartialType(CreateMessageDto) {
  @IsOptional()
  @IsDefined()
  @IsString()
  readonly libelle_prop: string;

  @IsOptional()
  @IsDefined()
  @IsDate()
  readonly sent_time: Date

  @IsOptional()
  @IsDefined()
  @IsString()
  readonly contenu_message: string

  @IsOptional()
  @IsDefined()
  @IsString()
  readonly freelancer_comment: string

  @Exclude()
  @IsOptional()
  attachments: Attachment[];

  @Exclude()
  @IsOptional()
  statut_proposition: StatutProposition;

}
