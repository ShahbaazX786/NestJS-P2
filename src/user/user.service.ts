import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Shaik Shahbaaz Alam', email: 'shahbaaz@gmail.com' };
  }

  getUser(userId: number) {
    return { userId };
  }

  store(body: createUserDto) {
    return body;
  }

  update(body: updateUserDto, userId: number) {
    return { body, userId };
  }

  deleteUser(userId: number) {
    return { userId };
  }
}
