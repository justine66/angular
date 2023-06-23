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
      prenom: new FormControl('a', [
        Validators.required,
        Validators.minLength(2),
        CustomValidator.pasToto,
      ]),
      nom: new FormControl(''),
    });
  }

  submit() {
    console.debug(this.form);
  }

  pasToto(control: AbstractControl): ValidationErrors | null {
    return control.value === 'toto' ? { toto: true } : null;
  }
}
