import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pate } from 'src/app/model/pate';
import { PateService } from 'src/app/service/pate.service';

@Component({
  selector: 'app-new-pate',
  templateUrl: './new-pate.component.html',
  styleUrls: ['./new-pate.component.scss'],
})
export class NewPateComponent implements OnInit {
  pate: Pate = new Pate();

  constructor(private pateService: PateService, private router: Router) {}

  ngOnInit(): void {}

  ajout() {
    this.pateService.create(this.pate).subscribe((pate) => {
      this.router.navigateByUrl('/pate');
    });
  }
}
