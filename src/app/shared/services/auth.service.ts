import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Admin } from '../models/admin.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin = false;
  isAuthenticated = false;
  userData = null;
  constructor(
    public fireAuth: AngularFireAuth,
    public fireStore: AngularFirestore,
    public ngZone: NgZone,
    public router: Router) {
    this.fireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
        console.log(localStorage.getItem('user'));
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
    alert('Currently do not work');
  }

  async authWithEmail(email, password): Promise<void> {
      const res = await this.fireAuth.signInWithEmailAndPassword(email, password);
      const collection$ = await this.fireStore.collection('users').doc(res.user.uid).get();
      collection$.subscribe(user => {
          this.userData = user.data();
          if ((this.userData as Admin).admin) {
            this.isAdmin = true;
            this.router.navigate(['/admin']);
          } else {
            this.userData.uid = res.user.uid;
            this.isAuthenticated = true;
            this.router.navigate(['/home']);
          }
      }, err => console.log(err));
    }
  logout(): void {
    if (this.isAdmin || this.isAuthenticated) {
      this.isAdmin = false;
      this.isAuthenticated = false;
      this.userData = null;
      this.router.navigate(['/logout']);
    } else {
      alert('User is not logged in');
    }
  }
}
