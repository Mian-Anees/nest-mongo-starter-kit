import { IsString } from "class-validator"

export class CreateAddressDto {
    @IsString()
    city: String
    @IsString()
    provience: String
    @IsString()
    country: String
    @IsString()
    addressline: String
}