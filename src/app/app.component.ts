import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ArithmeticComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'AritmeticaApp';
}
