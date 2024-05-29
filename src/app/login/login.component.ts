import { Component } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
import { TokenStorageService } from '../token-service/token-storage.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    email: null,
    mot_de_passe: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { } 

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { email, mot_de_passe } = this.form;

    this.authService.login(email, mot_de_passe).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigateByUrl('/accueil'); 
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}











/*import { HttpClient } from '@angular/common/http';
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
    this.http.post('http://localhost:5000/authService/loginAdmin', this.data).subscribe({
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
*/