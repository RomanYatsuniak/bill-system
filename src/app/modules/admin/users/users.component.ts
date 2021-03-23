import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(public userService: UserService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getBasicUsersInfo().subscribe(users => {
      this.users = users;
    });
  }


  showUser(userId): void {
    this.router.navigate(['admin/users', userId]);
  }
  changeUser(userId): void{
    this.router.navigate(['admin/users', userId, 'change']);
  }
  changeBills(userId): void {
    this.router.navigate(['admin/users', userId, 'bills']);
  }

  removeUser(userId): void {
    this.userService.deleteUser(userId);
    this.users = this.users.filter(user => user.uid !== userId);
  }

}
