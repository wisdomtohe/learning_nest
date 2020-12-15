import { Exclude } from "class-transformer";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";
import { Message } from "src/message/entities/message.entity";

export class CreateAttachmentDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  readonly link_attachment: string;

  @Exclude()
  message: Message;
}
