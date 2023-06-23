import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authSrv: AuthService, private router: Router) {}

  connexion() {
    this.authSrv.connexion(this.login, this.password).subscribe({
      next: (json) => {
        this.error = false;
        sessionStorage.setItem('token', json.token);
        this.authSrv.infos().subscribe((data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
        });
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.debug(err);
        this.error = true;
      },
    });
  }
}
