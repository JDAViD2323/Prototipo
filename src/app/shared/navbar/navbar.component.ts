import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { VariableService } from '../../sidebar.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from '../../service/login.service';
import { catchError, of } from 'rxjs';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'mw-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, MatMenuModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<boolean>();
  isOpen: boolean = false;
  isOpenS: boolean = false

  constructor(private variableService: VariableService, private loginService : LoginService, private userService:UserService) {}

  cambiarValorDeVariable() {
    this.isOpenS = !this.isOpenS;
    this.variableService.setVariable(this.isOpenS);
  }
  color= "#FF6600";
  color2 = "#100e9f";

  cerrarSesion(){
    // this.loginService.LogOut().subscribe(
    //   (response) => { console.log(response); },
    //   (error) => { console.log(error); });
    //var userService = inject(UserService);
    this.userService.logOut().subscribe(
      (data)=>{
        console.log(data)
      },(error)=>{
        console.log(error)
      }
    )
  }

  toggleSidebars(){
    this.isOpenS = !this.isOpenS;
    this.toggleSidebar.emit(this.isOpenS);
    console.log("n" + this.isOpenS)
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    ;
  }
  isModalOpen: boolean = false

  closeModal() {
    this.isModalOpen = false;
  }
  //isModalOpen: boolean = false;
  modalData: any = null; // Variable para almacenar los datos del modal

  openModal() {
    this.isModalOpen = true;
  }

  token(){
    this.loginService.refreshToken()
  }





}
