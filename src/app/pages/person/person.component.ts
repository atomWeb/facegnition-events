import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  image64!: string;
  eventsList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  regForm = this.fb.group({
    thumbnail: ['', [Validators.required]],
    personName: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(23)],
    ],
    imageCode64: [''],
    selectedEvents: [[], [Validators.required]],
  });

  resetForm() {
    this.image64 = '';
    this.regForm.reset();
  //   for (const key in this.regForm.controls) {
  //     this.regForm.get(key)?.clearValidators();
  //     this.regForm.get(key)?.updateValueAndValidity();
  //  }
    this.regForm.controls['personName'].clearValidators();
    this.regForm.controls['personName'].updateValueAndValidity();
    this.regForm.controls['selectedEvents'].clearValidators();
    this.regForm.controls['selectedEvents'].updateValueAndValidity();
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.regForm.patchValue({
      imageCode64: this.image64,
    });
    console.log(this.regForm.value);
  }
}
