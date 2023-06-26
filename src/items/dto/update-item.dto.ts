import { IsNotEmpty, IsNumberString } from "class-validator"

export class UpdateItemDto {

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    description: string

    @IsNumberString()
    qty: number
    
}