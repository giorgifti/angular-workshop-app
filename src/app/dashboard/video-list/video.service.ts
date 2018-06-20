import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  getVideoList() {
    return this.httpClient.get<Video[]>("https://api.angularbootcamp.com/videos");
  }
}
