import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/model/ingredient';
import { IngredientService } from 'src/app/service/ingredient.service';

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.scss'],
})
export class NewIngredientComponent {
  ingredient: Ingredient = new Ingredient();

  constructor(
    private ingredientSrv: IngredientService,
    private router: Router
  ) {}

  ajout() {
    this.ingredientSrv.create(this.ingredient).subscribe((ingredient) => {
      this.router.navigateByUrl('/ingredients');
    });
  }
}
