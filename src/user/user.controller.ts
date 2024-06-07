import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
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
  store(@Body() body: createUserDto) {
    return this.user.store(body);
  }

  @Patch('/:userId')
  update(@Body() body: updateUserDto, @Param() param:{userId:number}) {
    return this.user.update(body,param);
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return this.user.deleteUser(params);
  }
}
