import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'mw-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,SidebarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


  booleanoRecibido: boolean | undefined = false;

  @Input() Status: boolean | undefined = false;

  constructor() {
    console.log("l" + this.booleanoRecibido);
  }

  ngOnInit() {
    this.booleanoRecibido = false;
  }

  recibirBooleano(booleano: boolean) {
    this.booleanoRecibido = booleano;
    console.log("l" + this.booleanoRecibido);
    this.Status = this.booleanoRecibido;
  }
}
