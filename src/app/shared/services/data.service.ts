import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public fireStore: AngularFirestore) {}
  getUserInfo(userId): Observable<any> {
    return this.fireStore.collection('users').doc(userId).get();
  }
  getUserBills(userId): Observable<any> {
    return this.fireStore.collection('bills').doc(userId).get();
  }
}
