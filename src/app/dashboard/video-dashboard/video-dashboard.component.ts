import { Component, OnInit} from '@angular/core';
import { Video } from '../video-list/video';
import { VideoService } from '../video-list/video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  currentVideo: Video;
  videoList: Observable<Video[]>;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoList = this.videoService.getVideoList();
  }

  selectCurrentVideo = (video: Video) => {
    this.currentVideo = video;
  }

}
