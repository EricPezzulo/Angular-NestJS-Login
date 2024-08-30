import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginUserDto } from './loginuser.dto';

import * as db from '../db.json';
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<UserLoginData> {
    const inputUserData: UserLoginData =
      this.appService.loginUser(loginUserDto);
    console.log(inputUserData);

    const user = db.users.find(
      (user) =>
        user.username.toLowerCase() === inputUserData.username.toLowerCase() &&
        user.password === inputUserData.password,
    );

    if (user) {
      console.log(`found user: ${user.username},`, user);
      return user;
    } else {
      console.log(`Could not find user ${inputUserData.username}`);
      return null;
    }
  }
}

export interface UserLoginData {
  username: string;
  password: string;
}
