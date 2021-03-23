import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {
  @Input() listName: string;
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

}
