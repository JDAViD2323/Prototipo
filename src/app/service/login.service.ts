import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfiguracionLogin } from '../interface/configuracionLogin.interface';
import { Observable, catchError, of } from 'rxjs';
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
        Id: ""
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
    })
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
  this.route.navigateByUrl('login');
  // let myheader = new HttpHeaders()
  // .set('Authorization', this.getTokenStorage())
  // .set('X-Tenant-Id', "desarrolloweb");
  //  var url = "https://innovat1.mx/gmural/serverpruebas/api/v0.1/usuarios/logout";
  //  const myheaders = { 'Authorization': `Bearer ${this.getTokenStorage()}` }

  // localStorage.removeItem("authorizationData");
  // const headers = { 'Authorization': `Bearer ${this.getTokenStorage()}`, 'X-Tenant-Id': `desarrolloweb`}
  // console.log(headers);
  // return this.http.post(url,{headers:headers})


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

  getTokenStorage(){
    var datos = (localStorage.getItem("authorizationData"));
    var dat: authorizationData =JSON.parse(String(datos))
    return dat.token
  }


  getTenantId():string{
    var datos = (localStorage.getItem("gMuralWebDataUsuario"));
    var dat: MuralWebDataUsuario =JSON.parse(String(datos))
    return dat.Tenant.Id
  }

}
