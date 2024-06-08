import { Injectable } from '@nestjs/common';
import { createUserDto } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private user: UserService) {}

  async validateUser(email, password) {
    const users = await this.user.findUserByEmail(email);
    if (users && users.length > 1) {
      let response:any = 1;
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
}
