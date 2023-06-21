import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './component/home/home.component';
import { AuthenticatedGuardService } from './service/authenticated-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticatedGuardService],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
