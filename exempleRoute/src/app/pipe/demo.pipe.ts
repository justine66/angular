import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monPipe',
})
export class DemoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.debug(value);
    return 'mon texte transformé';
  }
}
