import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserLoginData } from './app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  loginUser(userLoginData: UserLoginData): UserLoginData {
    try {
      const { username, password } = userLoginData;
      if (!username || !password) {
        throw new HttpException('Invalid login data', HttpStatus.BAD_REQUEST);
      }
      return { username, password };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Something went wrong, no username or password found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
