import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { User } from '../../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  sortProperty: string;
  orderBy = '';

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  changeOrderBy(prop) {
    if (this.sortProperty === prop) {
      if (this.orderBy === '') {
        this.orderBy = 'asc';
      } else if (this.orderBy === 'asc') {
        this.orderBy = 'desc';
      } else if (this.orderBy === 'desc') {
        this.orderBy = '';
      }
    } else {
      this.sortProperty = prop;
    }
  }

}
