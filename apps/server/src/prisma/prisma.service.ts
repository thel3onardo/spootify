import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  //TODO: what if there's an error?
  async onModuleInit() {
    await this.$connect();
  }
}
