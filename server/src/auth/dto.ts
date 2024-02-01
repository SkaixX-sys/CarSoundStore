import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpBodyDto {
    @ApiProperty({ example: "test@email.com" })
    @IsEmail()
    email: string

    @ApiProperty({ example: "password" })
    @IsNotEmpty()
    password: string
}

export class SignInBodyDto {
    @ApiProperty({ example: "test@email.com" })
    @IsEmail()
    email: string

    @ApiProperty({ example: "password" })
    @IsNotEmpty()
    password: string
}

export class getSessionInfoDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    email: string

    @ApiProperty()
    "iat": number

    @ApiProperty()
    "exp": number
}