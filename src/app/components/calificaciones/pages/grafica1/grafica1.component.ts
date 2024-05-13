import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { single, barChartcustomColors } from './data'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-grafica1',
  standalone: true,
  imports: [CommonModule,RouterLink, NgxChartsModule],
  templateUrl: './grafica1.component.html',
  styleUrl: './grafica1.component.css'
})
export class Grafica1Component implements OnInit {
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  single: any[] | undefined;

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }
}
