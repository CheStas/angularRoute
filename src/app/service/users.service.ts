import { Injectable } from '@angular/core';
import { User } from '../users';

@Injectable()
export class UsersService {
  users: User[] = [
    {
        name: 'Dilan',
        lastName: 'Pol',
        email: 'dilan@pol.com',
        year: 1978,
        password: 'dilan98'
    },
    {
        name: 'Mark',
        lastName: 'Total',
        email: 'mark@total.com',
        year: 1970,
        password: 'mark78'
    },
    {
        name: 'ann',
        lastName: 'first',
        email: 'first@gmail.com',
        year: 1928,
        password: 'mark78'
    },
    {
        name: 'jun',
        lastName: 'live',
        email: 'jun@live.com',
        year: 1972,
        password: 'mark78'
    },
    {
        name: 'april',
        lastName: 'year',
        email: 'april@gmail.com',
        year: 1996,
        password: 'mark78'
    },
    {
        name: 'march',
        lastName: 'december',
        email: '1march@gmail.com',
        year: 1935,
        password: 'mark78'
    },
    {
        name: 'November',
        lastName: 'Total',
        email: 'pasha@gmail.com',
        year: 1999,
        password: 'mark78'
    }
];

  constructor() {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));
    } else {
      this.addToStorage();
    }
   }

  checkEmail(email): boolean {
    return this.users.some(el => el.email === email);
  }

  checkPass(email, pass): boolean {
    return this.users.some(el => el.email === email && el.password === pass);
  }

  getPass(email): string {
    let pass: string;
    this.users.forEach(el => {
      if (el.email === email) { pass = el.password; }
    });
    return pass;
  }

  addUser(user): void {
    this.users.push(user);
  }

  getUsers(): Array<User> {
    return this.users;
  }

  getCurrentUser(): User {
    let user: User;
    this.users.forEach(el => {
      if (el.isCurrent) {
        user = el;
      }
    });
    return user;
  }

  setCurrentUser(email): void {
    this.users.forEach(el => {
      if (el.email === email) {
        el.isCurrent = true;
      } else {
        el.isCurrent = false;
      }
    });
  }

  addToStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  saveUser(user) {
    this.users.forEach(el => {
      if (el.isCurrent) {
        el.name = user.name;
        el.lastName = user.lastName;
        el.email = user.email;
        el.year = user.year;
        el.password = user.password;
      }
    });
    this.addToStorage();
  }

}
