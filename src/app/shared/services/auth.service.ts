import {Injectable, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import { User } from '../../shared/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthanticated: boolean;
  userData: any;
  constructor(
    public fireAuth: AngularFireAuth,
    public fireStore: AngularFirestore,
    public ngZone: NgZone,
    public router: Router) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  signup(data: User): void {
    this.fireAuth.createUserWithEmailAndPassword(data.email, data.password).then((res) => {
      console.log(data);
      return this.fireStore.collection('users').doc(res.user.uid).set({
        name: data.firstName,
        surname: data.surname,
        age: data.age,
        address: data.address,
      });
    }).then(col => this.router.navigate(['home']));
  }

  // authWithGoogle(): Promise<any> {
  //   return this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
  //     if (data.user) {
  //     this.router.navigate(['']);
  //     }
  //   });
  // }

  authWithEmail(email, password): Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isAuthanticated = true;
    }).catch(err => console.log(err));
  }

  // logout() {
  //
  // }
}
