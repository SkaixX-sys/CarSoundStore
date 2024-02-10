import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DbModule } from 'src/db/db.module';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [DbModule],
  providers: [ProductService, AuthGuard],
  controllers: [ProductController],
})
export class ProductModule { }
