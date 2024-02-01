import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductItemDto } from './dto';
import { Response } from 'express';

@Controller('product')
@ApiTags("products")
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get('get-product')
    @ApiOkResponse()
    async getProduct(productId: number) {
        return await this.productService.findOneProductById(productId)
    }

    @Get('get-many-products')
    @ApiOkResponse()
    async getManyProducts() {
        return await this.productService.findManyProducts()
    }

    @Post('create-product')
    @ApiCreatedResponse()
    async createProduct(@Body() body: ProductItemDto) {
        return await this.productService.createProduct(body)
    }

    @Patch('patch-product')
    @ApiCreatedResponse()
    async patchProduct(@Body() body: ProductItemDto, id: number) {
        return await this.productService.patchProduct(body, id)
    }

    @Delete('delete-product')
    @ApiOkResponse()
    async deleteOneProductById(id: number) {
        return await this.productService.deleteOneProduct(id)
    }




}
