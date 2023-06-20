import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.scss'],
})
export class BonjourComponent implements OnInit, OnDestroy {
  prenom = '';
  obs!: any;
  //injection d'un ActivatedRoute pour traiter les parametres de la requete
  //injection possible car c'est le framework qui cree le component
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  //pas utile pour les parametres
  //juste pour l'exemple
  ngOnDestroy() {
    this.obs.unsubscribe();
  }
  ngOnInit(): void {
    // this.prenom = this.activatedRoute.snapshot.params['prenom'];
    this.obs = this.activatedRoute.params.subscribe((params) => {
      this.prenom = params['prenom'];
    });
  }
  home() {
    this.router.navigateByUrl('/home');
  }
}
