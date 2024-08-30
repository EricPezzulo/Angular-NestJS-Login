import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private user!: User;

  setUser(userData: User) {
    return (this.user = userData);
  }
  getUser() {
    return this.user;
  }
}
export interface User {
  firstName: string;
  lastName: string;
  password: string;
  profilePicture: string;
  username: string;
}
