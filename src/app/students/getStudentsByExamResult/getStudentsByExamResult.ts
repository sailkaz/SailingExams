import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IStudentByExamResult } from '../../models/studentByExamResult';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-studentsWhoPassedTheExam',
  templateUrl: './getStudentsByExamResult.html',
  styleUrls: ['./getStudentsByExamResult.css']
})
export class GetStudentsByExamResultComponent {

  examResult!: string;
  sailingExamNumber!: string;
  sub!: Subscription;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;


  students!: IStudentByExamResult[];

  constructor(
    private httpService: HttpService,
    private router: Router) {

  }

  getStudentsWhoPassedTheExam(examResult: string, sailingExamNumber: string) {
    this.sub = this.httpService.getStudentsWhoPassedTheExam(examResult, sailingExamNumber)
    .subscribe({
      next: posts => {
        this.students = posts
      }
    });
    this.examResult = '';
    this.sailingExamNumber = '';
  }

  onBack(): void {
    this.router.navigate(['/manager']);
  }

  sortUsersData(direction: 'asc' | 'desc') {
    let data = this.students.sort((x, y) => {
      if (x.lastName > y.lastName) {
        return direction == 'asc' ? 1 : -1;
      }
      else if (x.lastName < y.lastName) {
        return direction == 'asc' ? -1 : 1;
      }
      else {
        return 0;
      }
    });
    this.students = data;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getStudentsWhoPassedTheExam(this.examResult, this.sailingExamNumber);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getStudentsWhoPassedTheExam(this.examResult, this.sailingExamNumber);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
