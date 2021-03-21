import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public fireAuth: AngularFireAuth,
              public fireStore: AngularFirestore) { }
  deleteUser(uid): void {
      console.log(uid);
      this.fireStore.collection('users').doc(uid).delete().then(() => {
        this.fireStore.collection('usersBills').doc(uid).delete();
      });
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
      return of(changedData);
    }));
  }
  getBasicUsersInfo(): Observable<any> {
    return this.fireStore.collection('users').get().pipe(
      switchMap(doc => {
        const users = [];
        doc.forEach(d => {
          const data: (User | Admin) = d.data() as (User | Admin);
          if (!(data as Admin).admin) {
            users.push({uid: d.id, firstName: (data as User).firstName, surname: (data as User).surname});
          }
        });
        return of(users);
      })
    );
  }
}
