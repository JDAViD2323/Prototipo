import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estado-cuenta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estado-cuenta.component.html',
  styleUrl: './estado-cuenta.component.css'
})
export class EstadoCuentaComponent {
  showPaidAccounts: boolean = false;
  cuentasPendientes: any[] = [
    { fecha: '2024-05-01', descripcion: 'Pago de Credencial', monto: 150.00 },
    { fecha: '2024-05-15', descripcion: 'Seguro estudiantil', monto: 500.00 }
  ];

  calcularMontoTotal(): number {
    let total: number = 0;
    for (let cuenta of this.cuentasPendientes) {
      total += cuenta.monto;
    }
    return total;
  }

  togglePaidAccountsVisibility(): void {
    this.showPaidAccounts = !this.showPaidAccounts;
  }

  onButtonClick(): void {
    // Aquí puedes implementar la lógica cuando se hace clic en el botón "Ver Detalles"
  }
  cuentaSeleccionada: any | null = null;

seleccionarCuenta(cuenta: any): void {
  this.cuentaSeleccionada = cuenta;
}

deseleccionarCuenta(): void {
  this.cuentaSeleccionada = null;
}
}
