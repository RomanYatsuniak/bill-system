import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../shared/services/user.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.scss']
})
export class NewBillComponent implements OnInit {
  userID = '';
  newBillForm = new FormGroup({
    date: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    electricity: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    gas: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    heat: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    maintenance: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)]),
    water: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(5)])
  });
  constructor(public route: ActivatedRoute, public user: UserService, public location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.userID = params.get('id'));
  }

  addBill(): void {
    this.user.addUserBill(this.userID, this.newBillForm.value);
    this.location.back();
  }

}
