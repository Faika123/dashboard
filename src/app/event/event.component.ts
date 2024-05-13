import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  evenements: any[] = [];

  constructor(private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.fetchEvenements();
  }

  fetchEvenements(): void {
    this.http.get<any[]>('http://localhost:3006/lister').subscribe(data => {
      this.evenements = data;
    });
  }
  deleteEvent(id: number): void {
    this.http.delete(`http://localhost:3006/${id}/supprimer`).subscribe(() => {
      this.evenements = this.evenements.filter(u => u.id !== id);
    });
}
}
