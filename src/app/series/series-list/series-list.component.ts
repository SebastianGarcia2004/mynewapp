import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeriesService } from '../series.service';
import { Series } from '../series';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Series[] = [];
  seasonsAverage: number = 0;  // 👈 NUEVO

  constructor(
    private seriesService: SeriesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.seriesService.getSeriesList().subscribe((data: any) => {
      this.series = data;
      // 👈 NUEVO: calcular promedio
      const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
      this.seasonsAverage = Math.round(total / this.series.length);
      console.log(this.series);
      this.cdr.detectChanges();
    });
  }
}