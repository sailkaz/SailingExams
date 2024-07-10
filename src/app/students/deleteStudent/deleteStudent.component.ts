import { Subscription } from 'rxjs';
import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'se-deleteStudent',
  templateUrl: './deleteStudent.component.html',
  styleUrls: ['./deleteStudent.component.css']
})
export class DeleteStudentComponent {

  pesel!: string;
  sub!: Subscription;
  responseInfo!: string;

  constructor(
    private httpService: HttpService,
    private router: Router) { }

  deleteStudent(pesel: string) {
    this.sub = this.httpService.deleteStudent(pesel)
    .subscribe({
      next: post => {
        this.responseInfo = post
        }
      });
    this.pesel = '';
  }

  onBack(): void {
    this.router.navigate(['/manager']);
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
}
