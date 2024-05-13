import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-modifier-type',
  templateUrl: './modifier-type.component.html',
  styleUrls: ['./modifier-type.component.css']
})
export class ModifierTypeComponent implements OnInit{
  type = { id: 0, nom: '', description: '' }; 

  private baseUrl = 'http://localhost:3010'; 

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {} 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getTypeById(id);
    });
  }

  getTypeById(id: number): void {
    const url = `${this.baseUrl}/${id}/listerbyid`;
    this.http.get<any>(url)
      .subscribe(
        response => {
          this.type = response;
        },
        error => {
          console.error(error); 
        }
      );
  }

  onSubmit(): void {
    const url = `${this.baseUrl}/${this.type.id}/modifier`;
    this.http.put(url, this.type)
      .subscribe(
        response => {
          console.log('Catégorie modifiée avec succès.'); 
          this.router.navigateByUrl('/admin/type');

        },
        error => {
          console.error(error); 
        }
      );
  }
  
}
