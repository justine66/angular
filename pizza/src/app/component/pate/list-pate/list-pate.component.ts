import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pate } from 'src/app/model/pate';
import { PateService } from 'src/app/service/pate.service';

@Component({
  selector: 'app-list-pate',
  templateUrl: './list-pate.component.html',
  styleUrls: ['./list-pate.component.scss'],
})
export class ListPateComponent implements OnInit {
  //pates: Pate[] = [];

  observablePates!: Observable<Pate[]>;

  constructor(private pateSrv: PateService) {}

  ngOnInit(): void {
    // this.pateSrv.getAll().subscribe((pates) => {
    //   this.pates = pates;
    // });
    this.observablePates = this.pateSrv.getAll();
  }

  delete(id: number) {
    this.pateSrv.delete(id).subscribe({
      next: () => {
        this.observablePates = this.pateSrv.getAll();
      },
      error: () => {
        alert(`pate à la base de plusieurs pizza!`);
      },
    });
  }
}
