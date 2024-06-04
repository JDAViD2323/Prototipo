import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MuralWebDataUsuario } from '../interface/MuralWebDataUsuario.interface';
import { authorizationData } from '../interface/authorizationData.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  urlBase: string = "https://innovat1.mx/gmural/serverpruebas"

  constructor(private http: HttpClient){

  }

  getuser(){
    var datos = (localStorage.getItem("gMuralWebDataUsuario"));
    var dat: MuralWebDataUsuario =JSON.parse(String(datos))
    var datos2 = (localStorage.getItem("authorizationData"));
    var da2t: authorizationData =JSON.parse(String(datos2))
    let body = new HttpParams();
    let path: string = "/api/v0.2/usuarios/"
    let myheader = new HttpHeaders()
    .set('Authorization', `Bearer ${da2t.token}`,)
    .set('X-Tenant-Id',dat.Tenant.Id)
    const headers = { 'Authorization': `Bearer ${da2t.token}`, 'X-Tenant-Id': dat.Tenant.Id }
    console.log(headers);
    return this.http.get<any>(this.urlBase+path+dat.Usuario.Llave,{headers})
  }

  logOut(){
    var path = "/api/v0.1/usuarios/logout";
    var datos = (localStorage.getItem("gMuralWebDataUsuario"));
    var dat: MuralWebDataUsuario =JSON.parse(String(datos))
    var datos2 = (localStorage.getItem("authorizationData"));
    var da2t: authorizationData =JSON.parse(String(datos2))
    const headers = { 'Authorization': `Bearer ${da2t.token}`, 'X-Tenant-Id': dat.Tenant.Id }
    console.log(headers);
    return this.http.post<any>(this.urlBase+path,{headers})
  }
}
