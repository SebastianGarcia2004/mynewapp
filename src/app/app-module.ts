import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SeriesModule } from './series/series.module';
import { ToastrModule } from 'ngx-toastr';                              // 👈 NUEVO
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service'; // 👈 NUEVO

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeriesModule,
    HttpClientModule,
    ToastrModule.forRoot({         
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: HTTP_INTERCEPTORS,                  
      useClass: HttpErrorInterceptorService,        
      multi: true                                  
    }
  ],
  bootstrap: [App],
})
export class AppModule {}