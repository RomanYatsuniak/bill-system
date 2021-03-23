import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../shared/services/user.service';
import {BaseBills} from '../../../../shared/models/count.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  bills: BaseBills[] = [];
  userId = '';
  constructor(public route: ActivatedRoute, public userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userService.getUserBills(params.get('id')).subscribe(bills => {
        this.bills = bills;
        this.userId = params.get('id');
      });
    });
  }

  addUserBill(): void {
    this.router.navigate(['admin/users', this.userId, 'bills', 'newbill']);
  }

  changeBill(billId): void {
    this.router.navigate(['admin/users', this.userId, 'bills', billId]);
  }

  removeBill(billId: string): void {
    this.bills = this.bills.filter(bill => bill.id !== billId);
    this.userService.removeUserBill(this.userId, billId);
  }

}
