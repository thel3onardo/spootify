import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(user: CreateUserDTO): string {
    return 'what' + user;
  }
}
