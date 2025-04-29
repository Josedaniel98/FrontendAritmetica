import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {
  private apiUrl = 'http://localhost:5203/api/arithmetic'; // Cambia la URL según tu servidor

  constructor(private http: HttpClient) {}

  calcular(operacion: string, num1: number, num2: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${operacion}?num1=${num1}&num2=${num2}`);
  }
}
