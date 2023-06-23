import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private authSrv: AuthService) {}
  logout() {
    this.authSrv.logout();
  }

  get login() {
    return this.authSrv.isAuthenticated();
  }
}
