import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pate } from 'src/app/model/pate';
import { Pizza } from 'src/app/model/pizza';
import { PateService } from 'src/app/service/pate.service';

@Component({
  selector: 'app-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.scss'],
})
export class NewPizzaComponent implements OnInit {
  pizza: Pizza = new Pizza();

  obsPate!: Observable<Pate[]>;

  constructor(private pateSrv: PateService) {}

  ngOnInit(): void {
    this.obsPate = this.pateSrv.getAll();
  }

  save() {
    console.debug(this.pizza);
  }
}
