import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;

  constructor(private router: Router) {
    this.isAuth = localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    if (username === 'Admin' && password === '12345') { 
      this.isAuth = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}