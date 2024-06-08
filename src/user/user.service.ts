import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  getUsers(): Promise<User[]> {
    return this.userRepository.find();
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
