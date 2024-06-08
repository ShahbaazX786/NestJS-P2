import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}
  @Get()
  getUsers() {
    return this.user.getUsers();
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.user.getUser(userId);
  }

  @Post()
  store(@Body() body: createUserDto) {
    return this.user.createUser(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:userId')
  update(
    @Body() body: updateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.user.update(body, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.user.deleteUser(userId);
  }
}
