import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  getAll(): string {
    this.service.create({ email: 'test@test.com', password: 'x' });
    return 'what';
  }
}
