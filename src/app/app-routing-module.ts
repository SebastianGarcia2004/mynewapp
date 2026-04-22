import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesDetail } from './series/series-detail/series-detail';

const routes: Routes = [
  { path: '', redirectTo: 'series', pathMatch: 'full' },
  { path: 'series', component: SeriesListComponent },
  { path: 'series/:id', component: SeriesDetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }