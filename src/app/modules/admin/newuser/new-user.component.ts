import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(public authService: AuthService, public location: Location) { }

  ngOnInit(): void {
  }

  registerUser(user: User): void {
    this.authService.signup(user);
    this.location.back();
  }

}
