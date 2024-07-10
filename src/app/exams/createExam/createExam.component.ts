import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IExam } from '../../models/exam';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'se-create-exam',
  templateUrl: './createExam.component.html',
  styleUrls: ['./createExam.component.css']
})
export class CreateExamComponent {

  exam: IExam = {
    sailingExamNumber: '',
    sailingExamDate: new Date,
    sailingExamPlace: '',
    students: [
      {
        firstName: '',
        lastName: '',
        pesel: ''
      }
    ]
  }

  sub!: Subscription;


  constructor(
    private httpService: HttpService,
    private router: Router) { }


  createExam(exam: IExam) {

    this.sub = this.httpService.createExam(exam)
      .subscribe({
        next: (exam: IExam) => {
          this.exam = exam;
          this.exam.sailingExamNumber = '';
          this.exam.sailingExamPlace ='';
        }
      })
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
