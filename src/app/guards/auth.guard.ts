import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router)
  const auth = localStorage.getItem("authorizationData")
  if(localStorage.getItem("authorizationData")){
    return true
  }{
    router.navigateByUrl('/login')
    return false
  }

};
