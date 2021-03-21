import { Injectable } from '@angular/core';
import { BaseBills, Count, Prices } from '../models/count.model';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }
  countPrice(consumedCount: Count, prices: Prices): BaseBills {
    return {
      water: consumedCount.water * prices.water,
      heat: consumedCount.heat * prices.heat,
      gas: consumedCount.gas * prices.gas,
      electricity: consumedCount.electricity * prices.electricity,
      maintenance: consumedCount.maintenance * prices.maintenance
    } as BaseBills;
  }
  dataToTable(bill: Count, prices: Prices): Table{
    const table: Table = {
      date: undefined,
      rows: []
    };
    const {date, ...filteredBill} = bill;
    const countedPrices = this.countPrice(filteredBill, prices);
    table.date = bill.date ? date : null;
    Object.keys(filteredBill)
      .forEach(b =>
        table.rows.push({name: b, consumed: bill[b], price: prices[b], total: countedPrices[b] }));
    return table;
  }
  countTotalPrice(bills: BaseBills): number {
    let sum = 0;
    const vals = Object.values(bills);
    sum = vals.reduce((acc, i) => acc + i, 0);
    return sum;
  }
}
