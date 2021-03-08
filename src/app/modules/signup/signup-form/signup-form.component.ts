import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  signupForm = new FormGroup( {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    passwordRepeat: new FormControl('', [Validators.minLength(8), Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  @Output() submitData = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitData.emit(this.signupForm.value);
  }

}
