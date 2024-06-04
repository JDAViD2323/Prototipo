import { Injectable } from '@angular/core';
import { dat } from '../interface/mensaje.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient,private loginService: LoginService) { }

  private jsonUrl = 'https://raw.githubusercontent.com/JDAViD2323/Prototipo/main/src/assets/data/dataMensaje.json';
  private url ="https://innovat1.mx/gmural/serverpruebas/api/v0.2/alumnos/"

  getData(): Observable<dat[]> {
    return this.http.get<dat[]>(this.jsonUrl);
  }
  getMessages(): Observable<dat[]> {
    return this.http.get<any>(this.jsonUrl);
  }

  getmessagesServe(){
    var path = "400168/avisos";
    var prueba ="https://innovat1.mx/gmural/serverpruebas/api/v0.1/usuarios/logout";
    const headers = { 'Authorization': `Bearer ${this.loginService.getTokenStorage()}`, 'X-Tenant-Id': this.loginService.getTenantId() }
    return this.http.get(this.url+path,{headers:headers})
  }

}
