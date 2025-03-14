import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms"
import { ContactdetailsComponent } from '../contactdetails/contactdetails.component';
import { QuerysectionComponent } from '../querysection/querysection.component';
import { MessageboxComponent } from '../messagebox/messagebox.component';
import { FormStateService } from '../../services/form-state.service';

interface ContactModel {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support" | '';
  message: string;
  consent: boolean;
}
@Component({
  selector: 'app-cardbox',
  imports: [FormsModule, ContactdetailsComponent, QuerysectionComponent, MessageboxComponent],
  templateUrl: './cardbox.component.html',
  styleUrl: './cardbox.component.scss'
})

export class CardboxComponent {
  submitted = false;
 contactModel: ContactModel = {
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false
  }

constructor(private formState: FormStateService) { }

  onFormSubmit(contactForm: NgForm) { 
    this.formState.setSubmitted(true);
    // console.log("Model", contactForm.value)
   
    if(contactForm.valid) {  
      alert(JSON.stringify(contactForm.value)) 
      
      this.formState.setSubmitted(false);
   
      contactForm.resetForm(); 
    } else {
     
      console.log("Submitted form was invalid")
    }
  }

}
