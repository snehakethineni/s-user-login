import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLoggedIn = false;
  private lockedEmails: string[] = [];

  constructor(private router: Router) {}

  lockAccount(email: string) {
    this.lockedEmails.push(email);
  }

  login(email: string, password: string): string | null {
    if (this.lockedEmails.includes(email)) {
      return 'Account locked';
    }
    if (email === 'admin@admin.com' && password === 'admin') {
      this.isLoggedIn = true;
      this.router.navigate(['/']);
      return null;
    } else {
      return 'Invalid credentials';
    }
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
