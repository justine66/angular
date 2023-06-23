import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CustomValidator } from 'src/app/validator/custom-validator';

@Component({
  selector: 'app-demo-formulaire-code',
  templateUrl: './demo-formulaire-code.component.html',
  styleUrls: ['./demo-formulaire-code.component.scss'],
})
export class DemoFormulaireCodeComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl(''),
      prenomLoginGrp: new FormGroup(
        {
          prenom: new FormControl('a', [
            Validators.required,
            Validators.minLength(2),
            CustomValidator.pasToto,
            CustomValidator.chaineInterdite('tutu'),
            CustomValidator.chaineInterdite('tata'),
          ]),
          login: new FormControl(''),
        },
        this.prenomLoginDifferent
      ),
    });
  }

  submit() {
    console.debug(this.form);
  }

  prenomLoginDifferent(control: AbstractControl): ValidationErrors | null {
    return control.get('prenom')?.value === control.get('login')?.value
      ? { prenomLoginEgaux: true }
      : null;
  }

  pasToto(control: AbstractControl): ValidationErrors | null {
    return control.value === 'toto' ? { toto: true } : null;
  }
}
