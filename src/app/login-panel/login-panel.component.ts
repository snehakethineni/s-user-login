import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    this.submittedCount++;
    console.log(this.userInput);
    if (this.userInput.email && this.userInput.password) {
      // Handle form submission
    }
  }
}
