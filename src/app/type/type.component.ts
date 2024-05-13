import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit{
  types: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listerTypes();
  }

  listerTypes(): void {
    this.http.get<any[]>('http://localhost:5000/typeService/lister').subscribe((data) => {
        this.types = data;
      });
  }
  deleteTypes(id: number): void {
    this.http.delete(`http://localhost:3010/${id}/supprimer`).subscribe(() => {
        this.types = this.types.filter((u) => u.id !== id);
      });
  }
}
