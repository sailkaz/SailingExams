import { IStudent } from './../../models/student';
import { Router } from '@angular/router';
import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { IUpdateExamResult } from '../../models/updateExamResult';
import { Subscription } from 'rxjs';

@Component({
  selector: 'se-updateExamResult',
  templateUrl: './updateExamResult.component.html',
  styleUrls: ['./updateExamResult.component.css']
})
export class UpdateExamResultComponent {

  pesel!: string;
  sub!: Subscription;
  student!: IStudent;
  responseInfo!: string;

  examResult: IUpdateExamResult = {
    operationType: 0,
    path: 'Result',
    op: 'add',
    from: "Student",
    value: ''
  }



  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  updateExamResult(pesel: string, examResult: IUpdateExamResult) {
    this.httpService.updateExamResult(pesel, examResult)
      .subscribe({
        next: post => {
          this.responseInfo = post;
          this.pesel = '';
          this.examResult.value = '';
        }
      });
  }

  // public addExamResult(pesel: string, result: string) {
  //   this.httpService.addExamResult(pesel, result)
  //     .subscribe({
  //       next: (student: IStudent) => {
  //         this.student = student;
  //         this.pesel = ''
  //       }
  //     })
  // }

  onBack() {
    this.router.navigate(['/manager'])
  }

}
