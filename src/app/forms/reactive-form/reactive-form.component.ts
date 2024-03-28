import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // um controle de formulário
  name = new FormControl('');
  // grupo de formulário
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  // grupo de formulários aninhados
  profileFormListGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
  // uso de formBuilder
  profileFormBuilder = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', Validators.maxLength(9)],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn(this.profileFormListGroup.value);
  }

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileFormListGroup.value);
  }

  onSubmit3() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileFormBuilder.value);
  }

  updateProfile() {
    this.profileFormListGroup.patchValue({
      firstName: 'Angerleide',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  get aliases() {
    return this.profileFormBuilder.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

}
