import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() onVideoSelect: EventEmitter<Video> = new EventEmitter<Video>();
  @Input() videoList: Video[];
  selectedVideo: Video;
  
  constructor() { }

  ngOnInit() {}

  selectVideo = (video: Video) => {
    this.selectedVideo = video;
    this.onVideoSelect.emit(video);
  }

}
