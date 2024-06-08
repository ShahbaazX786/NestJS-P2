import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { createUserDto } from 'src/user/dto/createUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req: any) {
    return this.auth.login(req.user);
  }

  @Post('/signup')
  async signup(@Body() req: createUserDto) {
    return await this.auth.createUser(req);
  }
}
