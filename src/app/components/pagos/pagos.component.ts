import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {
  cuentasPorPagar = [
    { id: 1, fecha: '2024-05-01', descripcion: 'Pago de Credencial estuadiantil', monto: 150.00, seleccionada: false },
    { id: 2, fecha: '2024-05-15', descripcion: 'Pago de Seguro estudiantil', monto: 500.00, seleccionada: false },
    // Agrega más cuentas según sea necesario
  ];
  total: number = 0;

  actualizarTotal(): void {
    this.total = this.cuentasPorPagar.reduce((acc, cuenta) => {
      if (cuenta.seleccionada) {
        acc += cuenta.monto;
      }
      return acc;
    }, 0);
  }
}
