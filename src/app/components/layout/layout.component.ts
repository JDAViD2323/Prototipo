import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { VariableService } from '../../sidebar.service';
import {MediaMatcher} from '@angular/cdk/layout';
import { CalendarioComponent } from '../calendario/calendario.component';

@Component({
  selector: 'mw-layout',
  standalone: true,
  imports: [NavbarComponent,RouterOutlet,SidebarComponent, FooterComponent,MatSidenavModule,CalendarioComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @ViewChild('sidebar') sidenav: MatSidenav | undefined;
  @ViewChild('sidenav',{static: true}) referencia : any;
  mobileQuery: MediaQueryList | undefined;
  private _mobileQueryListener: (() => void) | undefined;
  constructor(private variableService: VariableService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.variableService.variable$.subscribe(value => {
      this.sidenav!.toggle()
      this.variableChanged(value);
      console.log(value)
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    });
  }

  variableChanged(value: any) {
    // Aquí ejecuta la función que deseas cuando la variable cambie
    console.log('La variable ha cambiado:', value);
  }
  booleanoRecibido: boolean  = false;

  @Input() Status: boolean  = false;


  ngOnInit() {
    this.booleanoRecibido = false;
  }

  recibirBooleano(booleano: boolean) {
    this.booleanoRecibido = booleano;
    console.log("l" + this.booleanoRecibido);
    this.Status = this.booleanoRecibido;
  }

  prueba(){
    this.sidenav?.toggle();
  }

}
