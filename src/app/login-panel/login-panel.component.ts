import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  onSubmit(loginForm: NgForm) {
    if(!loginForm.valid) {
      loginForm.form.markAllAsTouched();
      this.submittedCount++;
      return;
    }

    if (this.userInput.email && this.userInput.password) {
      const error = this.loginService.login(this.userInput.email, this.userInput.password);
      if (error) {
        this.submittedCount++;
        this.errorMessage = error;
      }
      else{
        return;
      }
    }

    if (this.submittedCount > 3) {
      this.loginService.lockAccount(this.userInput.email);
      const error = this.loginService.login(this.userInput.email, this.userInput.password);
      this.errorMessage = error;
    }
  }
}
