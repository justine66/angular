import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoFirstComponent } from './component/demo-first/demo-first.component';
import { ProduitComponent } from './component/produit/produit/produit.component';
import { CreateProduitComponent } from './component/produit/create-produit/create-produit.component';
import { FormsModule } from '@angular/forms';
import { DisplayProduitComponent } from './component/produit/display-produit/display-produit.component';
import { EquipeComponent } from './component/equipe/equipe.component';
import { SondageComponent } from './component/sondage/sondage.component';
import { CreateEquipeComponent } from './component/create-equipe/create-equipe.component';
import { MenuComponent } from './component/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { BonjourComponent } from './component/bonjour/bonjour.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sondage', component: SondageComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'bonjour/:prenom', component: BonjourComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DemoFirstComponent,
    ProduitComponent,
    CreateProduitComponent,
    DisplayProduitComponent,
    EquipeComponent,
    SondageComponent,
    CreateEquipeComponent,
    MenuComponent,
    FooterComponent,
    BonjourComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
