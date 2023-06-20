import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login = '';
  password = '';
  error = false;
  constructor(private router: Router) {}

  send() {
    if (this.login === 'toto' && this.password === 'toto') {
      this.router.navigateByUrl(`/secure/${this.login}`);
    } else if (this.login === 'titi' && this.password === 'titi') {
      this.router.navigateByUrl(`/secure/${this.login}`);
    } else {
      this.error = true;
    }
  }
}
