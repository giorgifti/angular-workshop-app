import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../video-list/video';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() video: Video;
  
  constructor() { }

  ngOnInit() {
  }

  getVideoPicture = () => {
    return 'https://img.youtube.com/vi/' + this.video.id + '/mqdefault.jpg';
  }

  getVideoSource = () => {
    return "//www.youtube.com/embed/" + this.video.id + "?rel=0";
  }
}
