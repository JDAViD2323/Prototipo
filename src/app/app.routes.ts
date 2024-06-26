import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path: '', title: 'Login',  component:LoginComponent},
  {path:'login', title: 'Login', component:LoginComponent},
  {path:'home', component:LayoutComponent, children:[
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    //{path:'', title: 'Inicio', loadComponent: () => import('./components/inicio/inicio.component').then(c => c.InicioComponent)},
    //{path: "inicio", title: "Inicio", loadComponent: () => import('./components/inicio/inicio.component').then(c => c.InicioComponent)},
    {path: "inicio", title: "Inicio", children: [
      {path:'', loadComponent: () => import('./components/inicio/inicio.component').then(c => c.InicioComponent),canActivate: [authGuard]},
      {path: 'publicacion/:id', loadComponent: ()=> import('./components/prueba/prueba.component').then(c => c.PruebaComponent),canActivate: [authGuard]}
    ]},
    {path: "publicacion", title: 'Publicaciones', loadComponent: ()=> import('./components/publicaciones/publicaciones.component').then(c => c.PublicacionesComponent),canActivate: [authGuard]},
    {path: "bandeja", title:"Bandeja de entrada", loadComponent: () => import('./components/bandeja/bandeja.component').then(c => c.BandejaComponent)},
    {path: "calendario", title: "Calendario de Eventos",  loadComponent: () => import('./components/calendario/calendario.component').then(c => c.CalendarioComponent),canActivate: [authGuard]},
    {path: "calificaciones", title: "Calificaciones", children: [
      {path: "", loadComponent: () => import('./components/calificaciones/calificaciones.component').then(c => c.CalificacionesComponent),canActivate: [authGuard]},
      {path: "materia", title:'Materia', loadComponent: () => import('./components/calificaciones/pages/grafica1/grafica1.component').then(c => c.Grafica1Component),canActivate: [authGuard]}
    ]},
    {path: 'estado-cuenta', title: 'Estado de cuenta', loadComponent: () => import('./components/estado-cuenta/estado-cuenta.component').then(c => c.EstadoCuentaComponent),canActivate: [authGuard]},
    {path: 'pago', title: 'Pagos', loadComponent: () => import('./components/pagos/pagos.component').then(c => c.PagosComponent),canActivate: [authGuard]},
    {path: 'perfil',title: 'Perfil', loadComponent: () => import('./components/perfil/perfil.component').then(c => c.PerfilComponent),canActivate: [authGuard]}
  ],canActivate: [authGuard]},
  {path: '**', redirectTo:'home'}

];
