import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {

  eventsList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  regForm = this.fb.group({
    thumbnail: ['', [Validators.required]],
    personName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(23)],
    ],
    events:[[], [Validators.required]]
  });

  resetForm() {
    // this.fileName = '';
    // this.base64Img = '';
    this.regForm.reset();
    this.regForm.controls['personName'].clearValidators();
    this.regForm.controls['personName'].updateValueAndValidity();
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.regForm.value);
  }
}
