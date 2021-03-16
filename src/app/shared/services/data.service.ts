import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public fireStore: AngularFirestore) {
    this.getServicesPrices();
  }
  getServicesPrices(): Observable<any> {
    return this.fireStore.collection('prices').doc('price').get().pipe(map(p => p.data()));
  }
  getUserInfo(userId): Observable<any> {
    return this.fireStore.collection('users').doc(userId).get();
  }
  getUserBills(userId): Observable<any> {
    return this.fireStore.collection('usersBills').doc(userId).collection('bills').get().pipe(switchMap(doc => {
      const changedData = [];
      doc.forEach(d => {
        const documentData = d.data();
        const orderByDocumentKeys = {};
        Object.keys(documentData).sort().forEach(key => orderByDocumentKeys[key] = documentData[key]);
        changedData.push(orderByDocumentKeys);
      });
      console.log(changedData, ' - changedData');
      return of(changedData);
    }));
  }
}
