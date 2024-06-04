import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { publicacion } from '../../interface/publicacion.interface';
import { PublicacionesService } from '../../service/Publicaciones.service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { CalendarioComponent } from '../calendario/calendario.component';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,HttpClientModule,CalendarioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [HttpClient,PublicacionesService]

})
export class InicioComponent implements OnInit {
  data : publicacion[] = [ ]

  publicaciones: publicacion[] = [];

  constructor(private publicacionesService: PublicacionesService, private usuarioService: UserService) {}

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe(
      data => this.data = data,
      error => console.error('Error al obtener las publicaciones', error)
    );
    this.usuarioService.getuser().subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }


  orden: boolean = false;

  OrdenCambio() {
    this.orden = !this.orden;
  }
}
