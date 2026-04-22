import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetail } from './series-detail/series-detail';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SeriesListComponent,   
    SeriesDetail,          
  ],
  exports: [SeriesListComponent, SeriesDetail]
})
export class SeriesModule {}