import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  loginWithEmail(email: string, password: string): void {
    this.authService.authWithEmail(email, password);
  }
  loginGoogle(): void{
    this.authService.authWithGoogle();
  }

}
