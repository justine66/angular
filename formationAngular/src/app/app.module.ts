import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoFirstComponent } from './component/demo-first/demo-first.component';
import { ProduitComponent } from './component/produit/produit/produit.component';
import { CreateProduitComponent } from './component/produit/create-produit/create-produit.component';
import { FormsModule } from '@angular/forms';
import { DisplayProduitComponent } from './component/produit/display-produit/display-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFirstComponent,
    ProduitComponent,
    CreateProduitComponent,
    DisplayProduitComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
