import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExam } from '../../models/exam';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';



@Component({
  selector: 'se-getExamWithStudents',
  templateUrl: './getExamWithStudents.component.html',
  styleUrls: ['./getExamWithStudents.component.css']
})
export class GetExamWithStudentsComponent {

  sailingExamNumber!: string;
  sub!: Subscription;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  // tableSizes: any = [3, 6, 9, 12];

  exam!: IExam;


  constructor(
    private httpService: HttpService,
    private router: Router) {
  }


  getExamWithStudents(sailingExamNumber: string) {
    this.sub = this.httpService.getExamWithStudents(sailingExamNumber)
      .subscribe({
        next: (result: any) => {
          this.exam = result
        }
      });
    this.sailingExamNumber = '';
  }

  onBack(): void {
    this.router.navigate(['/manager'])
  }

  sortUsersData(direction: 'asc' | 'desc') {
    let data = this.exam.students.sort((x, y) => {
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
    this.exam.students = data;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getExamWithStudents(this.sailingExamNumber);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getExamWithStudents(this.sailingExamNumber);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
