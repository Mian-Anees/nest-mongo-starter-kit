import { IsEmail, IsString } from "class-validator"

export class SignupAuthDto { }


export class LoginAuthDto {
    @IsEmail()
    email: string

    @IsString()
    password: string
}


export class UpdateAuthDto { }
