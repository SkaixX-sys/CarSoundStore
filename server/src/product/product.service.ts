import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ProductItemDto } from './dto';

@Injectable()
export class ProductService {
    constructor(private db: DbService) { }

    async findOneProductById(productId: number) {

        const product = await this.db.product.findFirst({ where: { id: Number(productId) } })
        if (!product) {
            throw new NotFoundException
        }
        return product
    }

    async findManyProducts() {
        const products = await this.db.product.findMany()
        if (!products) {
            throw new NotFoundException
        }
        return products
    }

    async createProduct(product: ProductItemDto) {
        try {
            return await this.db.product.create({ data: { ...product } })
        } catch (error) {
            throw new BadRequestException
        }
    }

    async patchProduct(product: ProductItemDto, productId: number) {
        console.log(productId);

        try {
            return await this.db.product.update({ data: { ...product }, where: { id: Number(productId) } })
        } catch (error) {
            throw new BadRequestException
        }
    }

    async deleteOneProduct(productId: number) {
        try {
            await this.db.product.delete({ where: { id: Number(productId) } })
        } catch (error) {
            throw new NotFoundException
        }
    }


}
