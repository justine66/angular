import { Component } from '@angular/core';
import { Produit } from './model/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  produit1 = new Produit(
    'television',
    500.99,
    'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_1280.jpg'
  );

  telephone = new Produit(
    'telephone',
    1000000,
    'https://cdn.pixabay.com/photo/2018/08/09/10/46/telephone-3594206_640.jpg'
  );

  pomme = new Produit('pomme', 0.9);
}
