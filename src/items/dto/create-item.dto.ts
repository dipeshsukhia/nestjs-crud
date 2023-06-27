import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumberString()
  qty: number;
}
