import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DbModule } from './db/db.module';
import { AccountModule } from './account/account.module';
import { ProductModule } from './product/product.module';
import { CookieModule } from './cookie/cookie.module';

@Module({
  imports: [AuthModule, UsersModule, DbModule, AccountModule, ProductModule, CookieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
