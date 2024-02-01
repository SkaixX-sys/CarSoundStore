import { ApiProperty } from "@nestjs/swagger"

export class ProductItemDto {
    @ApiProperty({ example: "name" })
    name: string

    @ApiProperty({ example: 10 })
    quantity: number

    @ApiProperty({ example: 2990 })
    newPrice: number

    @ApiProperty({ example: 4990 })
    oldPrice: number
}