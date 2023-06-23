import { AnonymousGuardService } from './service/anonymous-guard.service';
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
import { DemoFormulaireCodeComponent } from './component/demo-formulaire-code/demo-formulaire-code.component';
import { AdminGuardService } from './service/admin-guard.service';

const routes: Routes = [
  { path: 'form', component: DemoFormulaireCodeComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousGuardService],
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate: [AnonymousGuardService],
  },
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
    canActivate: [AdminGuardService],
  },
  {
    path: 'pate',
    component: ListPateComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'pate/add',
    component: NewPateComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'ingredients',
    component: ListIngredientComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'ingredients/add',
    component: NewIngredientComponent,
    canActivate: [AdminGuardService],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
