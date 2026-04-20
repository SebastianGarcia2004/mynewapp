import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { dataSeries } from '../dataSeries';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css',
})
export class SeriesListComponent implements OnInit {
  series: Array<Series> = [];

  constructor(private seriesService: SeriesService) {}

  getSeriesList(): Array<Series> {
    this.seriesService.getSeriesList().subscribe((data) => {
      this.series = data;
    });
    return this.series;
  } 

  ngOnInit() {
    this.getSeriesList();
  }
}