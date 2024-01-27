import { ApiProperty } from "@nestjs/swagger";

export class SignUpBodyDto {
    @ApiProperty({ example: "test@text.com" })
    email: string

    @ApiProperty({ example: "password" })
    password: string
}

export class SignInBodyDto {
    @ApiProperty({ example: "test@text.com" })
    email: string

    @ApiProperty({ example: "password" })
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