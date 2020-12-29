import { IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly link_test: string;
}
