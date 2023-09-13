import { Controller, Get } from '@nestjs/common';

@Controller('track')
export class TrackController {
  @Get()
  findAll(): string {
    return 'from track';
  }
}
