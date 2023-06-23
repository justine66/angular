import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  login = '';
  password = '';
  error = false;
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.form = new FormGroup(
      {
        login: new FormControl('', Validators.required),
        passwordGrp: new FormGroup(
          {
            password: new FormControl('', [
              Validators.required,
              Validators.pattern(
                /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!$*]).{4,}/
              ),
            ]),
            confirm: new FormControl(''),
          },
          this.passwordConfirmEqual
        ),
      },
      this.loginPasswordNotEquals
    );
  }

  loginPasswordNotEquals(control: AbstractControl): ValidationErrors | null {
    if (control.get('login')?.invalid) return null;
    return control.get('login')?.value ===
      control.get('passwordGrp.password')?.value
      ? { loginPasswordNotEquals: true }
      : null;
  }

  passwordConfirmEqual(control: AbstractControl): ValidationErrors | null {
    if (control.get('password')?.invalid) return null;
    return control.get('password')?.value !== control.get('confirm')?.value
      ? { passwordConfirmEqual: true }
      : null;
  }

  inscription() {
    this.authService
      .inscription(
        this.form.get('login')?.value,
        this.form.get('passwordGrp.password')?.value
      )
      .subscribe({
        next: (res) => {
          this.error = false;
          this.router.navigateByUrl('/login');
        },
        error: (err) => {
          this.error = true;
        },
      });
  }
}
