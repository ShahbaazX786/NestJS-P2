import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { User } from './entity/user.entity';

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
    // return this.userRepository.findOneById(userId); //deprecated
    return this.userRepository.findOne({ where: { id: userId } });
  }

  createUser(body: createUserDto) {
    return this.userRepository.save(body);
  }

  update(body: updateUserDto, userId: number) {
    return this.userRepository.update(userId, body);
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }

  findUserByEmail(email) {
    return this.userRepository.find({ where: { email } });
  }
}
