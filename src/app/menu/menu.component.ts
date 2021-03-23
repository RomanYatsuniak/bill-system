import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import { Location } from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  arrowShow = false;
  constructor(public auth: AuthService, public route: ActivatedRoute, public router: Router, public location: Location) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.arrowShow = event.url.trim().split('/').length > 3 ? true : false;
      }
    });
  }

  onLogout(): void {
    this.auth.logout();
  }
  onReturn(): void {
    this.location.back();
  }
}
