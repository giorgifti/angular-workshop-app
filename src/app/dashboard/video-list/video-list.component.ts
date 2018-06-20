import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() onVideoSelect: EventEmitter<Video> = new EventEmitter<Video>();
  
  videoList: Video[];
  selectedVideo: Video;
  
  constructor(private videoService: VideoService) { }

  ngOnInit() {
      this.videoService.getVideoList().subscribe(data => {
        this.videoList = data;
      });
  }

  selectVideo = (video: Video) => {
    this.selectedVideo = video;
    this.onVideoSelect.emit(video);
  }

}
