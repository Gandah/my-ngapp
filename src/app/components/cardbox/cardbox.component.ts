import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms"
import { ContactdetailsComponent } from '../contactdetails/contactdetails.component';
import { QuerysectionComponent } from '../querysection/querysection.component';
import { MessageboxComponent } from '../messagebox/messagebox.component';

interface ContactModel {
  firstName: string;
  lastName: string;
  email: string;
  queryType: "general" | "support";
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
 contactModel: ContactModel = {
    firstName: '',
    lastName: '',
    email: '',
    queryType: 'general',
    message: '',
    consent: false
  }

constructor() { }

  onFormSubmit(contactForm: NgForm) { 
    console.log("Model", contactForm.value)
   
    if(contactForm.valid) {  
      alert(JSON.stringify(contactForm.value)) 
      
      contactForm.reset(); 
    } else {
     
      console.log("Submitted form was invalid")
    }
  }

}
