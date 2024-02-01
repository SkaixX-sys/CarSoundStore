import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ProductItemDto } from './dto';

@Injectable()
export class ProductService {
    constructor(private db: DbService) { }

    async findManyProducts() {
        await this.db.product.findMany()
    }

    async findOneProductById(productId: number) {
        await this.db.product.findFirst({ where: { id: productId } })
    }

    async createProduct(product: ProductItemDto) {
        await this.db.product.create({ data: { ...product } })
    }

    async patchProduct(product: ProductItemDto, productId: number) {
        await this.db.product.update({ data: { ...product }, where: { id: productId } })
    }

    async deleteOneProduct(productId: number) {
        await this.db.product.delete({ where: { id: productId } })
    }


}
