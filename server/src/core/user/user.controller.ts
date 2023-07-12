import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from '@/core/user/user.service';
import { User } from '@/core/user/entity/user.entity';
import { UserDto } from '@/core/user/user.dto';
import { Response } from '@/common/common.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/get')
  getUsers(): Promise<Response<User[]>> {
    return this.userService.findAll();
  }

  @Post('/create')
  async createUser(@Body() data: UserDto) {
    return await this.userService.create(data);
  }

  @Get('/info')
  getUserInfo(@Query('uuid') uuid: string): Promise<User> {
    return this.userService.findUserInfo(uuid);
  }
}
