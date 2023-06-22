import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './component/home/home.component';
import { AuthenticatedGuardService } from './service/authenticated-guard.service';
import { ListIngredientComponent } from './component/ingredient/list-ingredient/list-ingredient.component';
import { NewIngredientComponent } from './component/ingredient/new-ingredient/new-ingredient.component';
import { ListPateComponent } from './component/pate/list-pate/list-pate.component';
import { NewPateComponent } from './component/pate/new-pate/new-pate.component';
import { ListPizzaComponent } from './component/pizza/list-pizza/list-pizza.component';
import { NewPizzaComponent } from './component/pizza/new-pizza/new-pizza.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'pizza',
    component: ListPizzaComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'pizza/add',
    component: NewPizzaComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'pate',
    component: ListPateComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'pate/add',
    component: NewPateComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'ingredients',
    component: ListIngredientComponent,
    canActivate: [AuthenticatedGuardService],
  },
  {
    path: 'ingredients/add',
    component: NewIngredientComponent,
    canActivate: [AuthenticatedGuardService],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
