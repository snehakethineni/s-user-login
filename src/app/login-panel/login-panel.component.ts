import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-panel.component.html',
  styleUrl: './login-panel.component.scss',
})
export class LoginPanelComponent {
  email: string = '';
  password: string = '';
  submittedCount = 0;

  onSubmit() {
    this.submittedCount++;
    console.log(this.email);
    console.log(this.password);
    if (this.email && this.password) {
      // Handle form submission
    }
  }
}
