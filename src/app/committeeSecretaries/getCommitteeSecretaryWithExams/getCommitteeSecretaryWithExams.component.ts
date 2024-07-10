import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IExam } from '../../models/exam';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getCommitteeSecretaryWithExams',
  templateUrl: './getCommitteeSecretaryWithExams.component.html',
  styleUrls: ['./getCommitteeSecretaryWithExams.component.css']
})
export class GetCommitteeSecretaryWithExamsComponent {
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

  getCommitteeSecretaryWithExams(lastName: string) {
    this.sub = this.httpService.getCommitteeSecretaryWithExams(lastName)
    .subscribe (posts => {
        this.exams = posts
      })
    }


  onBack() {
    this.router.navigate(['/admin'])
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getCommitteeSecretaryWithExams(this.lastName);
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getCommitteeSecretaryWithExams(this.lastName);;
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
}
