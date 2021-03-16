import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidService {
  constructor(private fireStore: AngularFirestore) {
    // console.log(this.fireStore.doc('/users'))
  }

  // tslint:disable-next-line:typedef
  validPasswords(pass, repPas) {

  }
}
