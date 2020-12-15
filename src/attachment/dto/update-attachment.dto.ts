import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateAttachmentDto } from './create-attachment.dto';

export class UpdateAttachmentDto extends PartialType(CreateAttachmentDto)  {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly link_attachmentext?: string;
}
