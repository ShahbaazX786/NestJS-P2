import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Shaik Shahbaaz Alam', email: 'shahbaaz@gmail.com' };
  }

  getUser(params: { userId: number }) {
    return params;
  }

  store(body: createUserDto) {
    return body;
  }

  update(body: updateUserDto, param: { userId: number }) {
    return { body, param };
  }

  deleteUser(params: { userId: number }) {
    return params;
  }
}
