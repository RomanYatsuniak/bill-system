import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Admin } from '../models/admin.model';
import * as _ from 'lodash';
import * as moment from 'moment';
import { BaseBills } from '../models/count.model';
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
    return this.fireStore.collection('users').doc(userId).get().pipe(map(user => user.data()));
  }

  changeUserInfo(userId, newInfo): Promise<any> {
    return this.fireStore.collection('users').doc(userId).set({
      firstName: newInfo.firstName,
      surname: newInfo.surname,
      age: newInfo.age,
      address: newInfo.address
    });
  }

  getUserBills(userId): Observable<any> {
    return this.fireStore.collection('usersBills').doc(userId).collection('bills').get().pipe(switchMap(doc => {
      let changedData = [];
      doc.forEach(d => {
        const documentData = d.data();
        const orderByDocumentKeys = {id: d.id};
        Object.keys(documentData).sort().forEach(key => orderByDocumentKeys[key] = documentData[key]);
        changedData.push(orderByDocumentKeys);
      });
      changedData = _.sortBy(changedData, [p => moment([p.date.split('/')[1], [p.date.split('/')[0]]])]).reverse();
      return of(changedData);
    }));
  }
  getUserBill(userId, billId): Observable<any> {
    return this.fireStore.collection('usersBills').doc(userId).collection('bills').doc(billId).get();
  }
  addUserBill(userId, bill): void {
    const newId = this.fireStore.createId();
    this.fireStore.collection('usersBills').doc(userId).collection('bills').doc(newId).set(bill);
  }
  removeUserBill(userId, billId): void {
    this.fireStore.collection('usersBills').doc(userId).collection('bills').doc(billId).delete();
  }
  changeUserBill(userId, billId, bill: BaseBills): void {
    this.fireStore.collection('usersBills').doc(userId).collection('bills').doc(billId).set({
      date: bill.date,
      electricity: bill.electricity as number,
      gas: bill.gas as number,
      heat: bill.heat as number,
      maintenance: bill.maintenance as number,
      water: bill.water as number
    });
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
