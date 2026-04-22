import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeriesService } from '../series.service';
import { Series } from '../series';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.html',
  styleUrl: './series-detail.css'
})
export class SeriesDetail implements OnInit {

  serie: Series | undefined;

  constructor(
    private route: ActivatedRoute,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.seriesService.getSeriesList().subscribe((data: any) => {
      this.serie = data.find((s: Series) => s.id === id);
    });
  }
}