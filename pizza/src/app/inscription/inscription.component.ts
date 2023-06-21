import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  login = '';
  password = '';
  error = false;

  constructor(private authService: AuthService, private router: Router) {}

  inscription() {
    if (this.login && this.password) {
      this.authService.inscription(this.login, this.password).subscribe({
        next: (res) => {
          this.error = false;
          this.router.navigateByUrl('/login');
        },
        error: (err) => {
          this.error = true;
        },
      });
    } else {
      this.error = true;
    }
  }
}
