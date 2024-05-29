import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { AjouterTypeComponent } from './ajouter-type/ajouter-type.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventComponent } from './event/event.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { ModifierTypeComponent } from './modifier-type/modifier-type.component';
import { ModifierEventComponent } from './modifier-event/modifier-event.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { TypeComponent } from './type/type.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AvisComponent } from './avis/avis.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjouterComponent,
    AjouterCategorieComponent,
    AjouterTypeComponent,
    CategoriesComponent,
    EventComponent,
    ModifierCategorieComponent,
    ModifierTypeComponent,
    ModifierEventComponent,
    NavbarComponent,
    SiderbarComponent,
    TypeComponent,
    UserComponent,
    LoginComponent,
    AvisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
