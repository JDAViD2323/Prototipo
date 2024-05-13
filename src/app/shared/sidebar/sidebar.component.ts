import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'mw-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen: boolean = false;
  @Input() Status: boolean | undefined;

  color= "#FF6600";
  color2 = "#100e9f";

  constructor() {
    this.Status = true;
    console.log("S" + this.Status)
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;

  }
  Statuss: boolean = false;

  toggleSidebars() {
    this.Status = !this.Status;
  }

  isOpen = false;

  openSidebar() {
    this.Status = true;
  }

  closeSidebar() {
    this.Status = false;
  }


}
