import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('list')
  create(): string {
    return 'list-post';
  }

  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  @Put('list/:id')
  update() {
    return 'update';
  }

  @Put('list/user')
  updateUser() {
    return { userID: 1 };
  }
}
