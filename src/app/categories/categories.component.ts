import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listerCategorie();
  }

  listerCategorie(): void {
    this.http.get<any[]>('http://localhost:3006/listercategorie').subscribe((data) => {
        this.categories = data;
      });
  }
  deleteCat(id: number): void {
    this.http.delete(`http://localhost:3006/${id}/supprimercategorie`).subscribe(() => {
        this.categories = this.categories.filter((u) => u.id !== id);
      });
  }
}
