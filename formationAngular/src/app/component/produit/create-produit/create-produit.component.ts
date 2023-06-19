import { Component } from '@angular/core';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.scss'],
})
export class CreateProduitComponent {
  nom = '';
  prix = 0;
  photo = '';
  produit = new Produit();

  envoyerProduit() {
    this.produit = new Produit(this.nom, this.prix, this.photo);
  }
}
