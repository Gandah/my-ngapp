import { Injectable } from '@angular/core';
import { NgModel, NgForm } from "@angular/forms"


@Injectable({
  providedIn: 'root'
})

export class FormStateService {
  constructor() { }

  submitted = false;
  
  setSubmitted(value: boolean) {
    this.submitted = value;
  }
}
