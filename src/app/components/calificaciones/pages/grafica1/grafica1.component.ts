import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { single, barChartcustomColors } from './data'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ColorHelper } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';



@Component({
  selector: 'app-grafica1',
  standalone: true,
  imports: [CommonModule,RouterLink, NgApexchartsModule],
  templateUrl: './grafica1.component.html',
  styleUrl: './grafica1.component.css'
})
export class Grafica1Component  {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Calificaiones",
          data: [10, 9, 8, 10, 8, 9, 9, 10, 8]
        }
      ],
      chart: {
        height: 300,
        type: "bar",
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Calificaciones duante el ciclo escolar",
        align: "center"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ag",
          "Sep"
        ]
      }
    };
  }
}
