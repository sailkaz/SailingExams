import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IExam } from '../../models/exam';

@Component({
  selector: 'se-getCommitteeHeadWithExams',
  templateUrl: './getCommitteeHeadWithExams.component.html',
  styleUrls: ['./getCommitteeHeadWithExams.component.css']
})
export class GetCommitteeHeadWithExamsComponent {

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

  getCommitteeHeadWithExams(lastName: string) {
    this.sub = this.httpService.getCommitteeHeadWithExams(lastName)
    .subscribe (posts => {
        this.exams = posts
      })
    }


  onBack() {
    this.router.navigate(['/admin'])
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getCommitteeHeadWithExams(this.lastName);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getCommitteeHeadWithExams(this.lastName);;
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }

}
