import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'MW-spinner',
  standalone: true,
  imports: [CommonModule,NgxSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show('spinner');

  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 30000);
  }
}
