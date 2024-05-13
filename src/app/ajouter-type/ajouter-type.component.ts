import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-type',
  templateUrl: './ajouter-type.component.html',
  styleUrls: ['./ajouter-type.component.css']
})
export class AjouterTypeComponent implements OnInit {
  nom: string = '';
  description: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

 

  ajouterTypes(): void {
    if (!this.nom) {
        console.log('Le nom de la catégorie est requis.');
        return;
    }

    this.http.post<any>('http://localhost:3010/ajouter', { nom: this.nom, description: this.description }).subscribe({next: () => {
                console.log('type ajoutée avec succès.');
                this.router.navigateByUrl('/admin/type');
                
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
