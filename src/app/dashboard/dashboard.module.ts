import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';

const routes: Routes = [
  { path: '', component: VideoDashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoPlayerComponent,
    StatFiltersComponent,
    VideoThumbnailComponent
  ]
})
export class DashboardModule { }
