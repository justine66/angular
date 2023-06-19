import { Component, Input } from '@angular/core';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-display-produit',
  templateUrl: './display-produit.component.html',
  styleUrls: ['./display-produit.component.scss'],
})
export class DisplayProduitComponent {
  @Input()
  produit!: Produit;

  description() {
    alert(
      `la description du produit:\n${this.produit.nom} ${this.produit.prix}`
    );
  }
}
