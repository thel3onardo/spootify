import { Injectable } from '@nestjs/common';
import { Track } from './track.interface';

@Injectable()
export class TrackService {
  create(track: Track): string {
    return 'what' + track;
  }
}
