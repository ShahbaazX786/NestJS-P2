import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.user.getUser(userId);
  }

  @Post()
  store(@Body() body: createUserDto) {
    return this.user.createUser(body);
  }

  @Patch('/:userId')
  update(
    @Body() body: updateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.user.update(body, userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.user.deleteUser(userId);
  }
}
