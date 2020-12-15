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
