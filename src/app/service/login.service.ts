import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfiguracionLogin } from '../interface/configuracionLogin.interface';
import { Observable } from 'rxjs';
import { MuralWebDataUsuario } from '../interface/MuralWebDataUsuario.interface';
import { Router } from '@angular/router';
import { authorizationData } from '../interface/authorizationData.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data = {
    Usuario: {
        Llave: null,
        Nombre: null,
        Tipo: null,
        DisLlave: null,
        blnToken: false
    },
    Tenant: {
        Id: null
    }
  };
  constructor(private http: HttpClient, private route:Router){
    console.log(this.authentication)
  }
authentication = {
    isAuth: false,
    userName: ""
};
  cheklogin(){
    const datos = localStorage.getItem("authorizationData");
  }

  USERNAME = "a400168";
  PASSWORD = "12345678";
  API = "https://innovat1.mx/gmural/serverpruebas/token";
  API1 = "https://innovat1.mx/gmural/serverpruebas/api/v0.1/cfglog"
  API2 = "https://innovat1.mx/gmural/serverpruebas/"
  dato = "desarrolloweb"

  getIdClient(unidad: string):Observable<ConfiguracionLogin> {
    let body = new HttpParams();
    let myheader = new HttpHeaders()
    .set('Content-Type','application/json; charset=utf-8')
    const jsonData = JSON.stringify(unidad);
    return this.http.post<any>(this.API1,jsonData,{headers: myheader})
  }

  getToken(clienteid:string, usuario: string, password: string, id:string,){
    var gDatosUsuario: MuralWebDataUsuario = {
      Tenant: {
        Id: ''
      }, Usuario: {
        Nombre: '',
        Llave: '',
        Tipo: '',
        DisLlave: '',
        blnToken: false
      } };
    let myheader = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded',)
      .set('X-Dis-Id', "8c335a02aee35dcbc84225801b266413")
      .set("X-Tenant-Id", clienteid);
    let body = new HttpParams();
    body = body.set('grant_type', "password");
    body = body.set('client_id', "MuralWeb");
    body = body.set('username', usuario);
    body = body.set('password', password);



    return this.http.post(this.API,body,{
      headers: myheader
    }).subscribe(
      (data:any) => {
         let datoauto = {
          "token": data.access_token,
          "userName": usuario,
          "refreshToken": data.refresh_token
        }
        this.authentication.isAuth=true;
        this.authentication.userName=usuario;
        localStorage.setItem('authorizationData',JSON.stringify(datoauto) );
        gDatosUsuario.Tenant.Id = clienteid;
        gDatosUsuario.Usuario.Llave = data.userId;
        gDatosUsuario.Usuario.Nombre = usuario;
        gDatosUsuario.Usuario.Tipo = data.userType;
        gDatosUsuario.Usuario.DisLlave = data.disLlave;
        gDatosUsuario.Usuario.blnToken = false
        console.log(gDatosUsuario.Tenant)
        this.GuardarUsuario(gDatosUsuario);
        this.route.navigateByUrl('/home/')

      }
    )
  }



  GuardarUsuario(gDatosUsuario:any) {
    this.data.Tenant.Id = gDatosUsuario.Tenant.Id;
    this.data.Usuario.Nombre = gDatosUsuario.Usuario.Nombre;
    this.data.Usuario.Llave = gDatosUsuario.Usuario.Llave;
    this.data.Usuario.Tipo = gDatosUsuario.Usuario.Tipo;
    this.data.Usuario.DisLlave = gDatosUsuario.Usuario.DisLlave;
    this.data.Usuario.blnToken = gDatosUsuario.Usuario.blnToken
    localStorage.setItem('gMuralWebDataUsuario', JSON.stringify(gDatosUsuario));
}

LogOut(){
  localStorage.removeItem("authorizationData");
}

  refreshToken() {
    var datos = (localStorage.getItem("authorizationData"));
    var dat: authorizationData =JSON.parse(String(datos))
    let myheader = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded',)
      .set('X-Dis-Id', "8c335a02aee35dcbc84225801b266413")
      .set("X-Tenant-Id", "desarrolloweb");
    let body = new HttpParams();
    body = body.set('grant_type', "refresh_token");
    body = body.set('client_id', "MuralWeb");
    body = body.set('refresh_token', dat.refreshToken);

     this.http.post(this.API,body,{
      headers: myheader
    }).subscribe(
      (data: any) =>{
        localStorage.removeItem("authorizationData")
        localStorage.setItem("authorizationData", JSON.stringify({ token: data.access_token, userName: data.userName, refreshToken: data.refresh_token }));
        console.log(localStorage.getItem("authorizationData"))
      }
    )
  }


}
