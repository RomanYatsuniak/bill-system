import { Injectable } from '@angular/core';
import {BaseBills, Count, Prices} from '../models/count.model';

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
    };
  }
  countTotalPrice(bills: BaseBills): number {
    let sum = 0;
    const vals = Object.values(bills);
    sum = vals.reduce((acc, i) => acc + i, 0);
    return sum;
  }
}
