import {Injectable, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';
import firebase from 'firebase/app';
import {Observable} from 'rxjs';
import { User } from '../../shared/models/user.model';
import {Admin} from '../models/admin.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin = false;
  isAuthanticated = false;
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
      return this.fireStore.collection('users').doc(res.user.uid).set({
        firstName: data.firstName,
        surname: data.surname,
        age: data.age,
        address: data.address,
      });
    }).then(col => this.router.navigate(['/']))
      .catch(err => alert('write correct data or if user already exist, login'));
  }

  authWithGoogle(): void {
    // this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(data => {
    //   if (data.user) {
    //     console.log(data.user.displayName);
    //     this.isAuthanticated = true;
    //     this.router.navigate(['/home']);
    //   }
    // });
    alert('Currently do not work');
  }

  authWithEmail(email, password): void {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.fireStore.collection('users').doc(res.user.uid).get().subscribe(user => {
        const userData = user.data();
        if ((userData as Admin).admin === true) {
          this.isAdmin = true;
          this.router.navigate(['/admin']);
        } else {
          this.isAuthanticated = true;
          this.userData = userData;
          this.router.navigate(['/home']);
        }
      });
    }).catch(err => alert('Not correct data, please try more'));
  }

  logout(): void {
    if (this.isAdmin || this.isAuthanticated) {
      this.isAdmin = false;
      this.isAuthanticated = false;
      this.userData = null;
      this.router.navigate(['/logout']);
    } else {
      alert('User is not logged in');
    }
  }
}
