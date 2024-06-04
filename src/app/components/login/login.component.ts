import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { ConfiguracionLogin } from '../../interface/configuracionLogin.interface';
import { Observable, Subject } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { MuralWebDataUsuario } from '../../interface/MuralWebDataUsuario.interface';
import { authorizationData } from '../../interface/authorizationData.interface';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'mw-login',
  standalone: true,
  imports: [RouterModule, RouterLink,CommonModule,FormsModule,ReactiveFormsModule,SpinnerComponent,NgxSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public cargando: boolean = false;




  fpPromise = FingerprintJS.load()
  id:string = "";
  constructor(private loginService: LoginService, private fb: FormBuilder,private spinner: NgxSpinnerService,private route:Router){
    (async () => {
      // Get the visitor identifier when you need it.
      const fp = await this.fpPromise
      const result = await fp.get()
      console.log("fring" + result.visitorId)
      this.id = result.visitorId
    })()

  }

  dataConfiguracion :ConfiguracionLogin= {
    "Cliente": "",
    "Color": "#746eac",
    "Imagen": "https://th.bing.com/th/id/R.0b0e8bf6746e02b220e57a95795bf26d?rik=8IRXCp8uh%2byb3A&pid=ImgRaw&r=0",
    "Titulo": "Innovat alumno"
  }

  public myForm: FormGroup = this.fb.group({
    escuela:["",[]],
    usuario:["",[]],
    password:["",[]],
    recordar:[false,]
  })

  configuracion(unidad:string){
    console.log(unidad)
    this.loginService.getIdClient(unidad)
  }

  inputValue: string = '';



  onBlur(unidad :string) {
     this.loginService.getIdClient(unidad).subscribe(
      (data) => {
        this.dataConfiguracion =data
        console.log(this.dataConfiguracion)
        localStorage.setItem("gMuralWebLoginTema",JSON.stringify(data))
      }
     )
  }

  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  log(){


   var authentication = {
      isAuth: false,
      userName: ""
  };
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

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.cargando = true;
    this.loginService.getToken(this.dataConfiguracion.Cliente,this.myForm.controls['usuario'].value,this.myForm.controls['password'].value,this.id).subscribe(
      (data:any) => {


         let datoauto = {
          "token": data.access_token,
          "userName": this.myForm.controls['usuario'].value,
          "refreshToken": data.refresh_token
        }
        authentication.isAuth=true;
        authentication.userName=this.myForm.controls['usuario'].value;
        localStorage.setItem('authorizationData',JSON.stringify(datoauto) );
        gDatosUsuario.Tenant.Id = this.dataConfiguracion.Cliente;
        gDatosUsuario.Usuario.Llave = data.userId;
        gDatosUsuario.Usuario.Nombre = this.myForm.controls['usuario'].value;
        gDatosUsuario.Usuario.Tipo = data.userType;
        gDatosUsuario.Usuario.DisLlave = data.disLlave;
        gDatosUsuario.Usuario.blnToken = false
        console.log(gDatosUsuario.Tenant)
        this.loginService.GuardarUsuario(gDatosUsuario);
        this.cargando = false;
        this.route.navigateByUrl('/home/')
      }, error => {
        console.error(error);
        this.cargando = false;
      }
    )


  }





}
