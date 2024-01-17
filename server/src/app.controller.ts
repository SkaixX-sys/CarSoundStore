import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';
import { DbService } from './db/db.service';

const prisma = new PrismaClient()

export class CreateCatDto {
  @ApiProperty()
  message: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private dbService: DbService) { }

  @Get()
  @ApiOkResponse({
    type: CreateCatDto
  })
  async getHello(): Promise<CreateCatDto> {
    const users = await this.dbService.user.findMany()
    console.log(`${users} user list`);
    return { message: this.appService.getHello() };
  }
}
