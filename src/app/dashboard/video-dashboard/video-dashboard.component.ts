import { Component, OnInit} from '@angular/core';
import { Video } from '../video-list/video';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  currentVideo: Video;

  constructor() { }

  ngOnInit() { }

  selectCurrentVideo = (video: Video) => {
    this.currentVideo = video;
  }

}
