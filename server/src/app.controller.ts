import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty  } from '@nestjs/swagger';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export class CreateCatDto {
  @ApiProperty()
  message: string;
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    type: CreateCatDto
  })
  async getHello():Promise<CreateCatDto> {
    const users = await prisma.user.findMany()
    console.log(users);
    return {message: this.appService.getHello()};
  }
}
