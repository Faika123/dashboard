import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-event',
  templateUrl: './modifier-event.component.html',
  styleUrls: ['./modifier-event.component.css']
})
export class ModifierEventComponent implements OnInit {
  categories: any[] = [];
  evenements: FormGroup;

  baseUrl = 'http://localhost:3006';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.evenements = this.fb.group({
      id: [0],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', Validators.required],
      lieu: ['', Validators.required],
      places_disponibles: ['', Validators.required],
      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      categorie_id: ['', Validators.required],
      photo_url: [null]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getEventById(id);
    });
    this.listerCategories();
  }

  listerCategories(): void {
    this.http.get<any[]>(`${this.baseUrl}/listercategorie`).subscribe(data => {
      this.categories = data;
      console.log('categories == ', this.categories);
    });
  }

  getEventById(id: number): void {
    const url = `${this.baseUrl}/${id}/listereventbyid`; // Ensure this URL matches your backend
    this.http.get<any>(url)
      .subscribe(
        response => {
          this.evenements.patchValue(response);
        },
        error => {
          console.error(error);
        }
      );
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.evenements.patchValue({
        photo_url: file
      });
    }
  }

  onSubmit(): void {
    const url = `${this.baseUrl}/${this.evenements.value.id}/modifier`; // Ensure this URL matches your backend
    this.http.put(url, this.evenements.value)
      .subscribe(
        response => {
          console.log('evenement modifiée avec succès.');
          this.router.navigateByUrl('/event');
        },
        error => {
          console.error(error);
        }
      );
  }
}
