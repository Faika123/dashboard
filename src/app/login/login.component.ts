import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any = {
    email: '',
    mot_de_passe:  ''
  };
  constructor(private http: HttpClient, private router: Router){}
  onSubmit() {
    this.http.post('http://localhost:3005/loginAdmin', this.data).subscribe({
      next: (res: any) => {
      console.log('token retrieved: ' , res.token);
       localStorage.setItem('loginToken', res.token);
       this.router.navigateByUrl('/accueil')
      },
     error: (error) => {
      console.error('login error:', error);
      console.log('login failed. please check your credentials');
     }
    });
    console.log( this.data);
    
  }
}
