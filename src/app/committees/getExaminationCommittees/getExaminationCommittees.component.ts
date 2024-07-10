import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { IExaminationCommittee } from '../../models/examinationCommittee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'se-getExaminationCommittees',
  templateUrl: './getExaminationCommittees.component.html',
  styleUrls: ['./getExaminationCommittees.component.css']
})
export class GetExaminationCommitteesComponent {

  sub!: Subscription;

  examinationCommittees!: IExaminationCommittee[];


  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  getExaminationCommittees() {
    this. sub = this.httpService.getExaminationCommittees()
    .subscribe (
      posts => {
        this.examinationCommittees = posts;
      }
    )
  }

  onBack() {
    this.router.navigate(['/admin'])
  }

  ngOnDestroy(): void {
   if (this.sub)
    this.sub.unsubscribe();
  }
}
