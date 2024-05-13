import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:LayoutComponent, children:[
    {path:'', title: 'Inicio', loadComponent: () => import('./components/inicio/inicio.component').then(c => c.InicioComponent)},
    {path: "inicio", title: "Inicio", loadComponent: () => import('./components/inicio/inicio.component').then(c => c.InicioComponent)},
    {path: "bandeja", title:"Bandeja de entrada", loadComponent: () => import('./components/bandeja/bandeja.component').then(c => c.BandejaComponent)},
    {path: "calendario", title: "Calendario de Eventos", loadComponent: () => import('./components/calendario/calendario.component').then(c => c.CalendarioComponent)},
    {path: "calificaciones", title: "Calificaciones", children: [
      {path: "", loadComponent: () => import('./components/calificaciones/calificaciones.component').then(c => c.CalificacionesComponent)},
      {path: "materia", title:'Materia', loadComponent: () => import('./components/calificaciones/pages/grafica1/grafica1.component').then(c => c.Grafica1Component)}
    ]},
    {path: 'estado-cuenta', title: 'Estado de cuenta', loadComponent: () => import('./components/estado-cuenta/estado-cuenta.component').then(c => c.EstadoCuentaComponent)},
    {path: 'pago', title: 'Pagos', loadComponent: () => import('./components/pagos/pagos.component').then(c => c.PagosComponent)}
  ]},
  {path: '**', redirectTo:'home'}

];
