import { IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateItemDto {
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumberString()
  qty: number;
}
