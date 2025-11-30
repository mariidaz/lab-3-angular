import { Component } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h3>User Profile</h3>
    <p>Це секретна сторінка, доступна тільки після авторизації.</p> <button (click)="logout()">Logout</button>
  `
})
export class Profile {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}