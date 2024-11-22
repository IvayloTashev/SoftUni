import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get IsLogged() :boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = null;
    }
  }

  login() {
    this.user = {
      firstName: 'John',
      email: 'johndoe@abv.bg',
      phoneNumber: '08787542244',
      password: '123456',
      id: 'asd123asd',
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }


}
