import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css'],
})
export class AjouterComponent {
  categories: any[] = [];
  selectedCategorieid: number | null = null ;
  ajouter: any = {
    titre: '',
    description: '',
    prix: '',
    lieu: '',
    places_disponibles: '', 
    date_deb: '',
    date_fin: '',
    categorie_id: '', // Updated property name to match database column
    photo_url: null
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listerCategories();
  }

  listerCategories(): void {
    this.http.get<any[]>('http://localhost:3006/listercategorie').subscribe(data => {
      this.categories = data;
      console.log('categories == '+ this.categories);
    });
  }

  // Function to get the selected category ID
  getSelectedCategoryId(categorie_id:number): void {
 this.selectedCategorieid = categorie_id;
  }

  // Function to get category by ID
  getCategoryById(id: number): void {
    this.http.get<any>(`http://localhost:3006/${id}/listerbyid`).subscribe(
      (category) => {
        console.log('Category:', category);
        // Handle the retrieved category data as needed
      },
      (error) => {
        console.error('Error fetching category:', error);
      }
    );
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('titre', this.ajouter.titre);
    formData.append('description', this.ajouter.description);
    formData.append('prix', this.ajouter.prix);
    formData.append('photo', this.ajouter.photo);
    formData.append('photo', this.ajouter.photo);
    formData.append('photo', this.ajouter.photo);
    formData.append('photo', this.ajouter.photo);
    formData.append('photo', this.ajouter.photo); // Ajout de la photo au FormData

    this.http.post<any>('http://localhost:3006/ajouter', formData)
      .subscribe(
        (response) => {
          console.log('Événement ajouté avec succès.', response);
          this.router.navigateByUrl('/event');
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de la requête :', error);
        }
      );
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ajouter.photo = file; // Stocker le fichier sélectionné dans la propriété photo
    }
  }
  
}
