import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SecureComponent } from './component/secure/secure.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, SecureComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
