import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login = '';
  password = '';
  error = false;

  constructor(private authSrv: AuthService) {}

  connexion() {
    this.authSrv.connexion(this.login, this.password).subscribe({
      next: (json) => {
        this.error = false;
        console.debug(json);
      },
      error: (err) => {
        console.debug(err);
        this.error = true;
      },
    });
  }
}
