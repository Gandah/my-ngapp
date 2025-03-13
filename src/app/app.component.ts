import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardboxComponent } from './components/cardbox/cardbox.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-fapp';
}
