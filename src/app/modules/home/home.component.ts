import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../shared/services/auth.service';
import { DataService } from '../../shared/services/data.service';
import { Count, Prices } from '../../shared/models/count.model';
import { zip } from 'rxjs';
import { UtilsService } from '../../shared/services/utils.service';
import { Table } from '../../shared/models/table.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userBills: Count[] = null;
  price: Prices = null;
  tables: Table[] = null;
  constructor(public fireStore: AngularFirestore,
              public authService: AuthService,
              public userService: UserService,
              public dataService: DataService,
              public utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    zip(this.dataService.getServicesPrices(), this.userService.getUserBills(this.authService.userData.uid)).subscribe(data => {
      if (data[1].length > 0) {
        this.price = data[0];
        this.userBills = data[1];
        this.tables = this.userBills.map(bill => this.utilsService.dataToTable(bill, this.price) as Table);
      } else {
        this.tables = null;
      }
    });
  }

}
