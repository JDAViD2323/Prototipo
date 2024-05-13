import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css',
  providers:[]
})
export class CalendarioComponent {

  // calendarOptions: CalendarOptions = {
  //   initialView: 'dayGridMonth',
  //   plugins: [dayGridPlugin],
  //   locale: 'es-MX',
  //   buttonText: {
  //     today: 'Hoy'
  //   }
  // };

  calendarOptions:CalendarOptions ={
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: 'es-MX',
    buttonText: {
      today: 'Hoy'
    },
    height: 'auto',

    eventClick: (arg2) => this.handleEventClick(arg2),
    aspectRatio: 1.35,
    events: [
      { title: 'event 1', date: '2024-05-15'},
      { title: 'event 2', date: '2024-05-17' }
    ]
  }
  selectedEvent: any;

  onEventClick(event: any) {
    console.log('Evento cliqueado:', event);
  }

  // handleDateClick(arg: DateClickArg) {
  //   alert('date click! ' + arg.dateStr)
  // }
  handleEventClick(event: EventClickArg) {
    this.isModalOpen = true;
    this.selectedEvent = event.event;
    console.log('Selected event:', event);
  }
  // ngOnInit() {
  //   this.calendarOptions = {
  //     plugins: [dayGridPlugin, interactionPlugin],
  //     initialView: 'dayGridMonth',
  //     locale: 'es-MX'
  //   };

  closeModal() {
    this.isModalOpen = false;
  }
  //isModalOpen: boolean = false;
  modalData: any = null; // Variable para almacenar los datos del modal

  openModal() {
    this.isModalOpen = true;
  }
  isModalOpen: boolean = false
//   daysGrid: number[][] = [];
//   constructor() { }
//   year:number | undefined;
//   mes:number  | undefined;
//   ngOnInit(): void {
//     this.year = new Date().getFullYear();
//     this.mes = new Date().getMonth();
//     this.createCalendar(this.year, this.mes); // Llama a la función para crear el calendario
//   }

//   createCalendar(year: number, month: number): void {
//     let mon = month - 1; // los meses en JS son 0..11, no 1..12
//     let d = new Date(year, mon);

//     const firstDayOfWeek = this.getDay(d);
//     const lastDayOfPreviousMonth = new Date(year, mon, 0).getDate();
//     const prependEmptyDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Días a agregar al principio

//     let daysInMonth = [];
//     let daysGridRow = [];

//     // Agregar días del mes anterior si el primer día no es lunes
//     if (prependEmptyDays > 0) {
//       for (let i = lastDayOfPreviousMonth - prependEmptyDays + 1; i <= lastDayOfPreviousMonth; i++) {
//         daysGridRow.push(i);
//       }
//     }

//     // <div> con el día (1 - 31)
//     while (d.getMonth() == mon) {
//       daysInMonth.push(d.getDate());

//       if (this.getDay(d) % 7 == 6) {
//         // Domingo, último día de la semana --> nueva línea
//         this.daysGrid.push([...daysGridRow, ...daysInMonth]);
//         daysInMonth = [];
//         daysGridRow = [];
//       }

//       d.setDate(d.getDate() + 1);
//     }

//     // Si quedan días por agregar después de completar la última semana
//     if (daysInMonth.length > 0) {

//        // Llenar el resto de la fila con días del mes siguiente
//        const nextMonth = month === 12 ? 1 : month + 1;
//        const daysInNextMonth = new Date(year, nextMonth, 0).getDate();
//        for (let i = 1; daysGridRow.length < 7; i++) {
//          daysGridRow.push(i);
//        }
//        this.daysGrid.push([...daysGridRow, ...daysInMonth]);
//       // Si el último día de la última semana del mes actual es un sábado (6),
//       // necesitamos iniciar una nueva fila para el mes siguiente
//       if (this.getDay(d) === 6) {
//         d.setDate(1); // Establecer la fecha al primer día del mes siguiente
//         const firstDayOfWeekNextMonth = this.getDay(d);
//         const nextDaysGridRow = [];
//         for (let i = 1; i <= 7; i++) {
//           nextDaysGridRow.push(i);
//         }
//         this.daysGrid.push([...nextDaysGridRow]);
//       }


//     }
//   }

//   getDay(date: Date): number {
//     // Obtiene el número de día desde 0 (lunes) a 6 (domingo)
//     let day = date.getDay();
//     if (day == 0) day = 7; // Hacer domingo (0) el último día
//     return day - 1;
//   }
// }


}
