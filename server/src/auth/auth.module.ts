import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CookieService } from 'src/cookie/cookie.service';

@Module({
  imports: [UsersModule, CookieService, JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' }
  })],
  controllers: [AuthController],
  providers: [AuthService, PasswordService],
})
export class AuthModule { }
