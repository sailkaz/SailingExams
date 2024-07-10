import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'se-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = this.formBuilder.group({
    name: new FormControl (null, [Validators.required]),
    email: new FormControl (null, [Validators.required]),
    password: new FormControl (null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  });

  constructor (
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ){

  }


  submit() {
    this.http.post('https://localhost:7169/api/account/registerUser', this.form.getRawValue(), {responseType: 'text'})
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
