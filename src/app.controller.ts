import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
@ApiTags('公共接口')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: '获取列表信息' })
  @Get('list')
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: '更新列表信息' })
  @Post('list')
  create(): string {
    return 'list-post';
  }

  @ApiOperation({ summary: '获取用户信息' })
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  @ApiOperation({ summary: '更新用户信息' })
  @Put('list/:id')
  update() {
    return 'update';
  }

  @ApiOperation({ summary: '更新用户' })
  @Put('list/user')
  updateUser() {
    return { userID: 1 };
  }
}
