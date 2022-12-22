import { IsString } from "class-validator"

export class CreateAreaDto {

    @IsString()
    name: String

    @IsString()
    city: String
}

