import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  nom: string = '';
  description: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

 

  ajouterCategorie(): void {
    if (!this.nom) {
        console.log('Le nom de la catégorie est requis.');
        return;
    }

    this.http.post<any>('http://localhost:3006/ajoutercategorie', { nom: this.nom, description: this.description }).subscribe({next: () => {
                console.log('categorie ajoutée avec succès.');
                this.router.navigateByUrl('/Categories');
                
                this.nom = '';
                this.description = '';
            },
            error: (error) => {
                if (error.status === 409) {
                    console.log('Le nom de la catégorie existe déjà.');
                } else {
                    console.error('Erreur interne du serveur : ', error);
                }
            }
        });
}
}
