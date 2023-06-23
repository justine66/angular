import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  public static pasToto(control: AbstractControl): ValidationErrors | null {
    return control.value === 'toto' ? { toto: true } : null;
  }
}
