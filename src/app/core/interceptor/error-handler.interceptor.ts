import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { LoginService } from '../../service/login.service';
import { inject } from '@angular/core';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  return next(req).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          // Specific handling for unauthorized errors
          console.log("error 401 aaaaaaaaaaaaaaaaaaaaaaaa")
          loginService.refreshToken()
          return next(req.clone({
            setHeaders: {
              Authorization: `Bearer ${loginService.getTokenStorage}`
            }
          }))

        } else {

          console.error('HTTP error:', err);
        }
      } else {

        console.error('An error occurred:', err);
      }

      loginService.LogOut()
      return throwError(() => err);
    })
  );;
};




