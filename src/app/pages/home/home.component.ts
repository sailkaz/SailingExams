import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';

@Component({
  selector: 'se-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greating = '';
  loggedRole = '';
  navigateErrorMessage = 'Nie masz uprawnień aby wejść na tę stronę.';
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
    if (AuthInterceptor.accessToken) {
      this.http.get('https://localhost:7169/api/account/logged', { responseType: 'text' })
        .subscribe({
          next: (_res: any) => {
            this.greating = `Cześć ${_res}!`;
          },
          error: () => {
            this.router.navigate(['/login']);
          }
        });
      this.http.get('https://localhost:7169/api/account/loggedRole', { responseType: 'text' })
        .subscribe({
          next: (_res: any) => {
            this.loggedRole = `${_res}`;
          },
          error: () => {
            this.router.navigate(['/login']);
          }
        });
    }
    else this.router.navigate(['/']);
  }

  studentPage() {

    this.router.navigate(['/user'])

  }

  managerPage() {
    this.http.get('https://localhost:7169/api/account/loggedRole', { responseType: 'text' })
      .subscribe({
        next: (_res: any) => {
          this.loggedRole = `${_res}`;
          if (this.loggedRole == 'Manager' || this.loggedRole == 'Admin')
            this.router.navigate(['/manager'])
          else
            this.errorMessage = this.navigateErrorMessage;
        }
      });
  }

  adminPage() {

    this.http.get('https://localhost:7169/api/account/loggedRole', { responseType: 'text' })
      .subscribe({
        next: (_res: any) => {
          this.loggedRole = `${_res}`;
          if (this.loggedRole == 'Admin')
            this.router.navigate(['/admin'])
          else
            this.errorMessage = this.navigateErrorMessage;
        }
      });
  }

}
