import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/service/demo.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent implements OnInit {
  login = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private monService: DemoService
  ) {
    console.debug(this.monService.sayHello());
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametres) => {
      this.login = parametres['login'];
    });
  }
}
