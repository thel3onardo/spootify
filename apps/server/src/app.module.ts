import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { TrackController } from './track/track.controller';
import { UserService } from './user/user.service';
import { TrackService } from './track/track.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [UserController, TrackController],
  providers: [UserService, TrackService, PrismaService],
})
export class AppModule {}
