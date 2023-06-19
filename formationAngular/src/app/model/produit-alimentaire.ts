import { Produit } from './produit';

export class ProduitAlimentaire extends Produit {
  constructor(
    nom?: string,
    prix?: number,
    photo?: string,
    public calorie?: number
  ) {
    super(nom, prix, photo);
  }
}
