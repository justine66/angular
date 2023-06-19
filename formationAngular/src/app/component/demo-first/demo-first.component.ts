import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo-first.component.html',
  styleUrls: ['./demo-first.component.scss'],
})
export class DemoFirstComponent {
  msg = 'un message du component';
  msg2: string = 'un autre message du component';
  lien: string = 'https://www.google.com/';
  type: string = 'text';
}
