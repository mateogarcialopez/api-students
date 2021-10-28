import { IsNotEmpty, IsString } from "class-validator"

export class courseDTO {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsNotEmpty()
    @IsString()
    duration: string
    @IsNotEmpty()
    @IsString()
    area: string
    @IsNotEmpty()
    @IsString()
    photo_schedule: string
}