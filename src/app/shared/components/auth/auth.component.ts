import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() title: string;
  @Input() height: string;
  constructor() { }

  ngOnInit(): void {
  }

}
