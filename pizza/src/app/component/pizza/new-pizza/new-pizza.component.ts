import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient';
import { Pate } from 'src/app/model/pate';
import { Pizza } from 'src/app/model/pizza';
import { IngredientService } from 'src/app/service/ingredient.service';
import { PateService } from 'src/app/service/pate.service';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.scss'],
})
export class NewPizzaComponent implements OnInit {
  pizza: Pizza = new Pizza();

  obsPate!: Observable<Pate[]>;
  obsIngredients!: Observable<Ingredient[]>;

  constructor(
    private pateSrv: PateService,
    private ingredientSrv: IngredientService,
    private pizzaSrv: PizzaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obsPate = this.pateSrv.getAll();
    this.obsIngredients = this.ingredientSrv.getAllIngredient();
  }

  save() {
    this.pizzaSrv.create(this.pizza).subscribe((pizza) => {
      this.router.navigateByUrl('/pizza');
    });
  }
}
