import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./arithmetic.component.css']
})
export class ArithmeticComponent {
  numero1: number | null = null;
  numero2: number | null = null;
  operacion: string = 'sum';
  resultado: number | null = null;
  error: string = '';

  constructor(private arithmeticService: ArithmeticService) {}

  calcular() {
    if (!Number.isInteger(this.numero1) || !Number.isInteger(this.numero2)) {
      this.error = 'Por favor, ingrese solo números enteros.';
      this.resultado = null;
      return;
    }

    this.error = ''; 

    this.arithmeticService.calcular(this.operacion, this.numero1!, this.numero2!).subscribe({
      next: (res: number) => {
        this.resultado = res;
      },
      error: (err) => {
        this.error = err.error;
        console.error(err);
      }
    });
  }
}
