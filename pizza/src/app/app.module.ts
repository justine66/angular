import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { ListIngredientComponent } from './component/ingredient/list-ingredient/list-ingredient.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NewIngredientComponent } from './component/ingredient/new-ingredient/new-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    MenuComponent,
    HomeComponent,
    ListIngredientComponent,
    NewIngredientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { useClass: AuthInterceptor, provide: HTTP_INTERCEPTORS, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
