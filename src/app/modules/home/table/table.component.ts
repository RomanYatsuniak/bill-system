import { Component, Input, OnInit } from '@angular/core';
import { TableRows } from '../../../shared/models/tableRows.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() rows: TableRows[];
  @Input() date: string;
  displayedColumns: string[] = ['name', 'consumed', 'price', 'total'];
  constructor() { }

  ngOnInit(): void {
  }

}
