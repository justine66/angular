import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, InscriptionComponent, MenuComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}