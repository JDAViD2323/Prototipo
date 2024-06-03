import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '';
  isAuth(){
    return localStorage.getItem("authorizationData")
  }
}
