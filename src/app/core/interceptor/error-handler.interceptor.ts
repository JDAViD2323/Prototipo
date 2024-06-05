import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { LoginService } from '../../service/login.service';
import { inject } from '@angular/core';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  return next(req).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {

          console.log("error 401 aaaaaaaaaaaaaaaaaaaaaaaa")
          console.log(loginService.getTokenStorage())
          loginService.refreshToken()
          console.log(loginService.getTokenStorage())
          return next(req.clone({
            setHeaders: {
              Authorization: `Bearer ${loginService.getTokenStorage()}`
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




