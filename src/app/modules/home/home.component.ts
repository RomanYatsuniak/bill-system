import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/models/user.model';
import {DataService} from '../../shared/services/data.service';
import {BaseBills, Count, Prices} from '../../shared/models/count.model';
import {zip} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {UtilsService} from '../../shared/services/utils.service';
import {Table} from '../../shared/models/table.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userBills: Count[] = null;
  price: Prices = null;
  tables = null;
  constructor(public fireStore: AngularFirestore,
              public authService: AuthService,
              public dataService: DataService,
              public utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    zip(this.dataService.getServicesPrices(), this.dataService.getUserBills(this.authService.userData.uid)).subscribe(data => {
      this.price = data[0];
      this.userBills = data[1];
      this.tables = this.userBills.map(bill => this.utilsService.dataToTable(bill, this.price));
    });
  }

}
