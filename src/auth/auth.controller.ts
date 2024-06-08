import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { loginDto } from './dto/login.dto';
import { createUserDto } from 'src/user/dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private user: UserService) {}
  @Post('/login')
  async login(@Body() req: loginDto) {
    const users = await this.user.findUserByEmail(req.email);
    if (users && users.length > 1) {
      let response = 'Password Does not match';
      const user = users.find((user) => user.password === req.password);
      if (user) {
        response = 'Login Sucessful';
      }
      return response;
    } else {
      return 'Please check your email';
    }
  }

  @Post('/signup')
  signup(@Body() req: createUserDto) {
    this.user.createUser(req);
  }
}
