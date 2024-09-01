import { Controller, HttpStatus, HttpCode, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from 'src/signInDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
