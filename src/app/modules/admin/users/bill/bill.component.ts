import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../shared/services/user.service';
import {BaseBills} from '../../../../shared/models/count.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  bill: BaseBills = {date: '00/00', electricity: 0, gas: 0, heat: 0, maintenance: 0, water: 0};
  billId = '';
  userId = '';

  billChangeForm = new FormGroup({
    date: new FormControl(this.bill.date, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    electricity: new FormControl(this.bill.electricity, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    gas: new FormControl(this.bill.gas, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    heat: new FormControl(this.bill.heat, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    maintenance: new FormControl(this.bill.maintenance, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    water: new FormControl(this.bill.water, [Validators.required, Validators.minLength(1), Validators.maxLength(5)])
  });
  constructor(public route: ActivatedRoute, public userService: UserService, public location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userService.getUserBill(params.get('id'), params.get('billId')).subscribe(bill => {
        this.billId = params.get('billId');
        this.userId = params.get('id');
        bill = bill.data() as BaseBills;
        this.billChangeForm.setValue({
          date: bill.date as string,
          electricity: bill.electricity as number,
          gas: bill.gas as number,
          heat: bill.heat as number,
          maintenance: bill.maintenance as number,
          water: bill.water as number
        });
    });
  });
  }
  changeBills(): void {
    this.userService.changeUserBill(this.userId, this.billId, this.billChangeForm.value);
    this.location.back();
  }

}
