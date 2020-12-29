import { IsDate, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Attachment } from '../../attachment/entities/attachment.entity';
import { Freelancer } from '../../freelancer/entities/freelancer.entity';
import { Client } from '../../client/entities/client.entity';
import { StatutProposition } from '../../statut-proposition/entities/statut-proposition.entity';
import { Proposition } from '../../proposition/entities/proposition.entity';

export class CreateMessageDto {
  @IsString()
  readonly libelle_prop: string;

  @IsString()
  readonly sent_time: Date

  @IsDate()
  readonly contenu_message: string

  @IsString()
  readonly freelancer_comment: string

  @Exclude()
  attachments: Attachment[];

  @Exclude()
  freelancer: Freelancer;

  @Exclude()
  client: Client;

  @Exclude()
  statut_proposition: StatutProposition;

  @Exclude()
  proposition: Proposition;
}
