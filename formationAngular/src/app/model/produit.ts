export class Produit {
  // private _nom!: string;
  // private prix: number;
  // private photo: string;

  // constructor(nom: string, prix: number, photo: string) {
  //   this.nom = nom;
  //   this.prix = prix;
  //   this.photo = photo;
  // }

  // constructor(
  //   private _nom: string,
  //   private _prix: number,
  //   private _photo: string
  // ) {}

  // get nom(): string {
  //   return this._nom;
  // }

  // set nom(value: string) {
  //   this._nom = value;
  // }
  // public get photo(): string {
  //   return this._photo;
  // }
  // public set photo(value: string) {
  //   this._photo = value;
  // }
  // public get prix(): number {
  //   return this._prix;
  // }
  // public set prix(value: number) {
  //   this._prix = value;
  // }

  constructor(
    public nom?: string,
    public prix?: number,
    public photo: string = 'https://cdn.pixabay.com/photo/2014/06/24/17/34/silhouette-376538_640.jpg'
  ) {}
}
