import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AjouterCategorieComponent } from './ajouter-categorie/ajouter-categorie.component';
import { CategoriesComponent } from './categories/categories.component';
import { ModifierCategorieComponent } from './modifier-categorie/modifier-categorie.component';
import { TypeComponent } from './type/type.component';
import { ModifierTypeComponent } from './modifier-type/modifier-type.component';
import { ModifierEventComponent } from './modifier-event/modifier-event.component';
import { LoginComponent } from './login/login.component';
import { AvisComponent } from './avis/avis.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
      {
        path: 'accueil',
        component: AccueilComponent,
      },
      {
        path: 'navbar',
        component: NavbarComponent,
      },
      {
        path: 'siderbar',
        component: SiderbarComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
      { path: 'ajouter', component: AjouterComponent },
      { path: '', redirectTo: '/ajouter', pathMatch: 'full' },
      {
        path: 'ajouter-categorie',
        component: AjouterCategorieComponent,
      },
      {
        path: 'Categories',
        component: CategoriesComponent,
      },
      {
        path: 'modifier-categorie/:id',
        component: ModifierCategorieComponent,
      },
      {
        path: 'ajouter-type',
        component: AjouterCategorieComponent,
      },
      {
        path: 'type',
        component: TypeComponent,
      },
      {
        path: 'avis',
        component: AvisComponent,
      },
    
      {
        path: 'modifier-type/:id',
        component: ModifierTypeComponent,
      },
      {
        path: 'modifier-event/:id',
        component: ModifierEventComponent,
      },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
