import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  utilisateurs: any[] = [];
  Params: any = {};

  constructor(private http: HttpClient, private router: Router){}
  
  ngOnInit(): void {
    this.listerUtilisateurs();
   
  }

  listerUtilisateurs(): void {
    this.http.get<any[]>('http://localhost:5000/authService/lister').subscribe(data => {
      this.utilisateurs = data;
    });
  }

  DeleteUser(id: number): void {
    this.http.delete(`http://localhost:5000/authService/${id}/supprimer`).subscribe(() => {
      this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
    });
  }
  rechercherUtilisateurs(): void {
    let queryParams: any = {};
    if (this.Params.nom) {
      queryParams.nom = this.Params.nom;
    }
    if (this.Params.prenom) {
      queryParams.prenom = this.Params.prenom;
    }
    if (this.Params.email) {
      queryParams.email = this.Params.email;
    }
    if (this.Params.tel) {
      queryParams.tel = this.Params.tel;
    }

    console.log('queryParams:', queryParams);

    // Construire l'URL avec les paramètres de requête
    let url = 'http://localhost:5000/authService/rechercher?';
    Object.keys(queryParams).forEach(key => {
        url += `${key}=${queryParams[key]}&`;
    });
    url = url.slice(0, -1); // Supprimer le dernier '&'

    console.log('URL:', url);

    // Effectuer la requête HTTP
    this.http.get<any[]>(url).subscribe(data => {
      // Filtrer les utilisateurs en fonction des critères de recherche
      this.utilisateurs = data.filter(user => {
          return (!this.Params.nom || user.nom.toLowerCase().includes(this.Params.nom.toLowerCase())) &&
                 (!this.Params.prenom || user.prenom.toLowerCase().includes(this.Params.prenom.toLowerCase())) &&
                 (!this.Params.email || user.email.toLowerCase().includes(this.Params.email.toLowerCase())) &&
                 (!this.Params.tel || user.tel.toLowerCase().includes(this.Params.tel.toLowerCase()));
      });
    });
}







}
