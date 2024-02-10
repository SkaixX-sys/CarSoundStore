import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductItemDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('product')
@ApiTags("products")
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get('get-product/:productId')
    @ApiOkResponse()
    async getProduct(@Param('productId') productId: number) {

        if (!productId) {
            throw new BadRequestException
        }

        return await this.productService.findOneProductById(productId)
    }

    @Get('get-many-products')
    @ApiOkResponse()
    async getManyProducts() {
        const products = await this.productService.findManyProducts()
        return products
    }

    @Post('create-product')
    @ApiCreatedResponse()
    @UseGuards(AuthGuard)
    async createProduct(@Body() body: ProductItemDto) {
        return await this.productService.createProduct(body)
    }

    @Patch('patch-product/:productId')
    @ApiCreatedResponse()
    @UseGuards(AuthGuard)
    async patchProduct(@Body() body: ProductItemDto, @Param('productId') productId: number) {
        return await this.productService.patchProduct(body, productId)
    }

    @Delete('delete-product/:productId')
    @ApiOkResponse()
    @UseGuards(AuthGuard)
    async deleteOneProductById(@Param('productId') productId: number) {
        return await this.productService.deleteOneProduct(productId)
    }




}
