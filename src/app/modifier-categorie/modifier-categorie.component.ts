import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {
  categorie = { id: 0, nom: '', description: '' }; 

  private baseUrl = 'http://localhost:3006'; 

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getCategorieById(id);
    });
  }

  getCategorieById(id: number): void {
    const url = `${this.baseUrl}/${id}/listerbyid`;
    this.http.get<any>(url)
      .subscribe(
        response => {
          this.categorie = response;
        },
        error => {
          console.error(error); 
        }
      );
  }

  onSubmit(): void {
    const url = `${this.baseUrl}/${this.categorie.id}/modifiercategorie`;
    this.http.put(url, this.categorie)
      .subscribe(
        response => {
          console.log('Catégorie modifiée avec succès.'); 
          this.router.navigateByUrl('/Categories');

        },
        error => {
          console.error(error); 
        }
      );
  }



 /* modifierCategorie(): void { 
    this.http.put<any>(`http://localhost:3006/${this.id}/modifiercategorie`, {
      nom: this.nom,
      description: this.description
    }).subscribe({
      next: () => {
        console.log('Catégorie modifiée avec succès.');
        this.router.navigateByUrl('/admin/Categories');
        // Pas besoin de réinitialiser les champs ici, car ils sont liés aux propriétés du composant
      },
      error: (error) => {
        if (error.status === 409) {
          console.log('Le nom de la catégorie existe déjà.');
        } else {
          console.error('Erreur interne du serveur : ', error);
        }
      }
    });
  }*/
}
