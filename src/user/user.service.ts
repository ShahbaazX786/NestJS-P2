import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUsers() {
    return { name: 'Shaik Shahbaaz Alam', email: 'shahbaaz@gmail.com' };
  }

  getUser(params: { userId: number }) {
    return params;
  }

  store(req: Request) {
    return req.body;
  }

  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }

  deleteUser(params: { userId: number }) {
    return params;
  }
}
