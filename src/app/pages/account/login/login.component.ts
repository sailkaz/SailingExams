import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from '../../../interceptors/auth.interceptor';

@Component({
  selector: 'se-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = this.formBuilder.group({
    email: new FormControl (null, [Validators.required]),
    password: new FormControl (null, [Validators.required]),
  });

  constructor (
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ){

  }

  submit() {
    this.http.post('https://localhost:7169/api/account/login', this.form.getRawValue(), {withCredentials: true})
      .subscribe((res: any) => {
        AuthInterceptor.accessToken = res.token;
        this.router.navigate(['/home']);
      });
  }
}
