import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'se-addStudentToExam',
  templateUrl: './addStudentToExam.component.html',
  styleUrls: ['./addStudentToExam.component.css']
})
export class AddStudentToExamComponent {

  sub!: Subscription;
  pesel!: string;
  sailingExamNumber!: string;
  responseInfo!: string;

  constructor(
    private httpService: HttpService,
    private router: Router) {

  }


  addStudentToExam(pesel: string, sailingExamNumber: string) {
    this.sub=this.httpService.addStudentToExam(pesel, sailingExamNumber)
      .subscribe({
        next: post => {
          this.responseInfo = post
        }
      });
          this.pesel = '';
          this.sailingExamNumber = '';
  }

  onBack(): void {
    this.router.navigate(['/user']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
