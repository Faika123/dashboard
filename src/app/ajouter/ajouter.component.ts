import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  ajouterForm: FormGroup;
  categories: any[] = [];

  baseUrl = 'http://localhost:3001/uploads/';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.ajouterForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      lieu: ['', Validators.required],
      places_disponibles: ['', Validators.required],
      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      categorie_id: ['', Validators.required],
      photo: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.listerCategories();
  }

  listerCategories(): void {
    this.http.get<any[]>('http://localhost:3006/listercategorie').subscribe(data => {
      this.categories = data;
      console.log('categories == '+ this.categories);
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ajouterForm.patchValue({
        photo: file
      });
    }
  }

  onSubmit() {
    if (this.ajouterForm.invalid) {
      return;
    }

    const formData = new FormData();
    Object.keys(this.ajouterForm.controls).forEach(key => {
      const control = this.ajouterForm.get(key);
      if (control) {
        formData.append(key, control.value);
      }
    });

    this.http.post('http://localhost:3006/ajouter', formData).subscribe(
      response => {
        console.log('Événement ajouté avec succès');
        this.router.navigateByUrl('/event');

        
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'événement', error);
      }
    );
  }
}
