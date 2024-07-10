import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExam } from '../../models/exam';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getCommitteeMemberWithExams',
  templateUrl: './getCommitteeMemberWithExams.component.html',
  styleUrls: ['./getCommitteeMemberWithExams.component.css']
})
export class GetCommitteeMemberWithExamsComponent {

  lastName!: string;
  sub!: Subscription;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  exams!: IExam[];

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  getCommitteeMemberWithExams(lastName: string) {
    this.sub = this.httpService.getCommitteeMemberWithExams(lastName)
    .subscribe (posts => {
        this.exams = posts
      })
    }


  onBack() {
    this.router.navigate(['/admin'])
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getCommitteeMemberWithExams(this.lastName);
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getCommitteeMemberWithExams(this.lastName);;
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
}
