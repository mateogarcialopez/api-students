import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class TeacherDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string
    @IsString()
    @IsNotEmpty()
    readonly surname: string
    @IsString()
    @IsNotEmpty()
    readonly working_day: string
    @IsString()
    @IsOptional()
    readonly id_course: string
}