import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { IngredientService } from 'src/app/service/ingredient.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.scss'],
})
export class ListIngredientComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private ingredientSrv: IngredientService) {}

  ngOnInit(): void {
    this.initIngredients();
  }

  initIngredients() {
    this.ingredientSrv.getAllIngredient().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  delete(id: number) {
    this.ingredientSrv.delete(id).subscribe({
      next: (noData) => {
        this.initIngredients();
      },
      error: (err) => {
        alert(`l'ingredient est encore utilisé pour des pizzas`);
      },
    });
  }
}
