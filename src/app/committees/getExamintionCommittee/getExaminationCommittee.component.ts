import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IExaminationCommittee } from '../../models/examinationCommittee';

@Component({
  selector: 'se-getExamintionCommittee',
  templateUrl: './getExaminationCommittee.component.html',
  styleUrls: ['./getExaminationCommittee.component.css']
})
export class GetExaminationCommitteeComponent {

  examinationCommitteeId!: number;
  sub!: Subscription;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  examinationCommittee!: IExaminationCommittee;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  getExaminationCommittee(examinationCommitteeId: number) {
    this. sub = this.httpService.getExaminationCommittee(examinationCommitteeId)
    .subscribe ({
      next: (post: IExaminationCommittee) => {
        this.examinationCommittee = post;
      }
    })
  }

  onBack() {
    this.router.navigate(['/admin'])
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getExaminationCommittee(this.examinationCommitteeId);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getExaminationCommittee(this.examinationCommitteeId);
  }

  ngOnDestroy(): void {
   if (this.sub)
    this.sub.unsubscribe();
  }

}
