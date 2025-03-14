import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormStateService } from '../../services/form-state.service';
@Component({
  selector: 'app-contactdetails',
  imports: [FormsModule],
  templateUrl: './contactdetails.component.html',
  styleUrl: './contactdetails.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ContactdetailsComponent {
  @Input() nameFields: any = { firstName: '', lastName: '', email: '' };

  constructor(public formState: FormStateService) { }
}
