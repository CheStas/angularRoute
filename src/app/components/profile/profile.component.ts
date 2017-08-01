import { Component, OnInit } from '@angular/core';
import { User } from '../../users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  message: string;

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.getCurrentUser();
  }

  save() {
    this.usersService.saveUser(this.user);
    this.message = 'information has been updated';
    setTimeout(() => { this.message = ''; }, 3000);
  }

}
