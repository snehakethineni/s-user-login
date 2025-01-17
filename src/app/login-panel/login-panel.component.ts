import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
})
export class LoginPanelComponent {
  userInput = {
    email: '',
    password: '',
  };
  submittedCount = 0;
  errorMessage: string | null = null;

  constructor(private loginService: LoginService) {}

  onSubmit() {
    if (this.userInput.email && this.userInput.password) {
      const error = this.loginService.login(this.userInput.email, this.userInput.password);
      if (error) {
        this.submittedCount++;
        this.errorMessage = error;
      }
    }

    if (this.submittedCount > 3) {
      this.loginService.lockAccount(this.userInput.email);
    }
  }
}
