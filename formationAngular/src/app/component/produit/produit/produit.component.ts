import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {
  @Input()
  produit!: Produit;

  constructor() {}

  //initialize
  //on garantie que toutes les données y compris les injections sont pretes
  ngOnInit() {}

  description() {
    alert(
      `la description du produit:\n${this.produit.nom} ${this.produit.prix}`
    );
  }
}
