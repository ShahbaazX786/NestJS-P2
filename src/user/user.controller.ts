import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return { name: 'Shaik Shahbaaz Alam', email: 'shahbaaz@gmail.com' };
  }

}
