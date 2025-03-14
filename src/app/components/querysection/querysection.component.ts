import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm, FormsModule } from '@angular/forms';
import { FormStateService } from '../../services/form-state.service';

@Component({
  selector: 'app-querysection',
  imports: [FormsModule],
  templateUrl: './querysection.component.html',
  styleUrl: './querysection.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class QuerysectionComponent {
  @Input() nameFields: any = {  queryType: '' };
  constructor(public formState: FormStateService) { }
}
