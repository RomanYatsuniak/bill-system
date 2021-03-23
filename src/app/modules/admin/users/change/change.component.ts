import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
import {User} from '../../../../shared/models/user.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
  user: User = {firstName: '', surname: '', address: '', age: 0};
  changeForm = new FormGroup({
    firstName: new FormControl(this.user.firstName, [Validators.minLength(2), Validators.required]),
    surname: new FormControl(this.user.surname, [Validators.minLength(2), Validators.required]),
    address: new FormControl(this.user.address, [Validators.minLength(4), Validators.required]),
    age: new FormControl(this.user.age, [Validators.minLength(2), Validators.required])
  });
  constructor(public route: ActivatedRoute, public location: Location, public userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userService.getUserInfo(params.get('id')).subscribe(user => {
        this.user = user;
        this.user.uid = params.get('id');
        this.changeForm.setValue({firstName: user.firstName, surname: user.surname, address: user.address, age: user.age});
      });
    });
  }

  changeUserInfo(): void {
  this.userService.changeUserInfo(this.user.uid, this.changeForm.value);
  this.location.back();
  }

}
