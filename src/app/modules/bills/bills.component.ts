import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {Prices} from '../../shared/models/count.model';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  prices: Prices = null;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getServicesPrices().subscribe(prices => {this.prices = prices;});
  }

}
