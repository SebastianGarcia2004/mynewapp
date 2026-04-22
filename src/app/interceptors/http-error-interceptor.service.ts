import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {  
  
  constructor(private toastrService: ToastrService) {}  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        let errorMessage = '';

        if (httpErrorResponse.error instanceof ErrorEvent) {
          errorMessage = httpErrorResponse.error.message;
        } else {
          let errorType = 'Server side error';
          if (httpErrorResponse.status === 0) {
            errorMessage = 'No hay conexión con el servidor';
          } else {
            errorMessage = `${httpErrorResponse.status}: ${httpErrorResponse.error?.error}`;
          }
          this.toastrService.error(errorMessage, errorType, { closeButton: true });
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}