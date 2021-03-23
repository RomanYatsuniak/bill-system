import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Routes} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public route: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.userService.getUserInfo(param.get('id')).subscribe(user => console.log(user));
    });
  }

}
