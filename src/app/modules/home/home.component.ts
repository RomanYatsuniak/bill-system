import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User = null;
  data: [{}];
  constructor(public fireStore: AngularFirestore, public authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.userData as User;
    console.log(this.user);
  }

}
