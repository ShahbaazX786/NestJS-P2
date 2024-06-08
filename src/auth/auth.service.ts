import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUserDto } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwt: JwtService,
  ) {}

  async validateUser(email, password) {
    const users = await this.user.findUserByEmail(email);
    if (users && users.length > 1) {
      let response: any = 1;
      const user = users.find((user) => user.password === password);
      if (user) {
        response = user;
      }
      return response;
    } else {
      return 2;
    }
  }

  async createUser(req: createUserDto) {
    return await this.user.createUser(req);
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwt.sign(payload),
    }
  }
}
