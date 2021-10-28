import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CareerDTO {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsNumber()
    @IsNotEmpty()
    credits: number
    @IsNumber()
    @IsNotEmpty()
    cost: number
}