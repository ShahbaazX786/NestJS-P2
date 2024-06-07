import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}
  @Get()
  getUsers() {
    return this.user.getUsers();
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return this.user.getUser(params);
  }

  @Post()
  store(@Req() req: Request) {
    return this.user.store(req);
  }

  @Patch('/:userId')
  update(@Req() req: Request, @Param() param:{userId:number}) {
    return this.user.update(req,param);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.user.deleteUser(params);
  }
}
