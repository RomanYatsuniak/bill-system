import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data = [
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
    {name: 'electricity', consumed: '2', price: '4', total: '8'},
  ];
  displayedColumns: string[] = ['name', 'consumed', 'price', 'total'];
  constructor() { }

  ngOnInit(): void {
  }

}
