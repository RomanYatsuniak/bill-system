import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import {User} from '../models/user.model';
import {Admin} from '../models/admin.model';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public fireStore: AngularFirestore, public fireauth: AngularFireAuth) {
    this.getServicesPrices();
  }
  getServicesPrices(): Observable<any> {
    return this.fireStore.collection('prices').doc('price').get().pipe(map(p => p.data()));
  }



}
