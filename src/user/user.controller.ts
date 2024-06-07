import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return { name: 'Shaik Shahbaaz Alam', email: 'shahbaaz@gmail.com' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }
}
