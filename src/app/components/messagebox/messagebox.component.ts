import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messagebox',
  imports: [FormsModule],
  templateUrl: './messagebox.component.html',
  styleUrl: './messagebox.component.scss',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class MessageboxComponent {
 @Input() nameFields: any = {   message: '', consent: false };
}
