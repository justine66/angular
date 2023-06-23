import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { ListIngredientComponent } from './component/ingredient/list-ingredient/list-ingredient.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NewIngredientComponent } from './component/ingredient/new-ingredient/new-ingredient.component';
import { ListPateComponent } from './component/pate/list-pate/list-pate.component';
import { NewPateComponent } from './component/pate/new-pate/new-pate.component';
import { ListPizzaComponent } from './component/pizza/list-pizza/list-pizza.component';
import { NewPizzaComponent } from './component/pizza/new-pizza/new-pizza.component';
import { DemoFormulaireCodeComponent } from './component/demo-formulaire-code/demo-formulaire-code.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    MenuComponent,
    HomeComponent,
    ListIngredientComponent,
    NewIngredientComponent,
    ListPateComponent,
    NewPateComponent,
    ListPizzaComponent,
    NewPizzaComponent,
    DemoFormulaireCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { useClass: AuthInterceptor, provide: HTTP_INTERCEPTORS, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
