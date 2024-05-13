import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  remarques: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.listerContact();
  }

  listerContact(): void {
    this.http.get<any[]>('http://localhost:3008/lister').subscribe((data) => {
        this.remarques = data;
      });
  }
  deleteAvis(id: number): void {
    this.http.delete(`http://localhost:3008/${id}/supprimer`).subscribe(() => {
        this.remarques = this.remarques.filter((u) => u.id !== id);
      });
  }
}
