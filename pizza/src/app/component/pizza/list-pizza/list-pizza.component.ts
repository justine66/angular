import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/model/pizza';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss'],
})
export class ListPizzaComponent implements OnInit {
  obsPizzas!: Observable<Pizza[]>;

  constructor(private pizzaSrv: PizzaService) {}
  ngOnInit(): void {
    this.obsPizzas = this.pizzaSrv.getAllPizza();
  }

  delete(id: number) {
    this.pizzaSrv.delete(id).subscribe(() => {
      this.obsPizzas = this.pizzaSrv.getAllPizza();
    });
  }
}
