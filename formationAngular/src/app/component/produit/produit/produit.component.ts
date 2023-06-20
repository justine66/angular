import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [
    new Produit(
      'avion',
      9999999,
      'https://cdn.pixabay.com/photo/2014/11/27/00/58/aircraft-547105_640.jpg'
    ),
    new Produit(
      'telephone',
      100,
      'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_640.jpg'
    ),
  ];

  constructor() {}

  //initialize
  //on garantie que toutes les données y compris les injections sont pretes
  ngOnInit() {}

  getProduit(produit: Produit) {
    this.produits.push(produit);
  }

  // produitExist(): boolean {
  //   if (this.produit) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
