import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { publicacion } from '../../interface/publicacion.interface';
import { PublicacionesService } from '../../service/Publicaciones.service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  providers: [HttpClient,PublicacionesService]

})
export class InicioComponent implements OnInit {
  data : publicacion[] = [ ]

  publicaciones: publicacion[] = [];

  constructor(private publicacionesService: PublicacionesService) {}

  ngOnInit(): void {
    this.publicacionesService.getPublicaciones().subscribe(
      data => this.data = data,
      error => console.error('Error al obtener las publicaciones', error)
    );
  }


  orden: boolean = false;

  OrdenCambio() {
    this.orden = !this.orden;
  }
}
