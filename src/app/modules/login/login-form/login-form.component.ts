import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidService } from 'src/app/shared/services/valid.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  @Output() submitData = new EventEmitter<{email: string, password: string}>();
  constructor(public validService: ValidService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitData.emit({...this.loginForm.value});
  }

}
