import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { IExaminationCommittee } from '../../models/examinationCommittee';

@Component({
  selector: 'se-createCommittee',
  templateUrl: './createExaminationCommittee.component.html',
  styleUrls: ['./createExaminationCommittee.component.css']
})
export class CreateExaminationCommitteeComponent {

  sub!: Subscription;

  examinationCommittee: IExaminationCommittee = {
    examinationCommitteeId: 0,
    examinationCommitteeHead: {
      examinationCommitteeHeadFirstName: '',
      examinationCommitteeHeadLastName: ''
    },
    examinationCommitteeSecretary: {
      examinationCommitteeSecretaryFirstName: '',
      examinationCommitteeSecretaryLastName: ''
    },
    examinationCommitteeMembers: [
      {
        examinationCommitteeMemberFirstName: '',
        examinationCommitteeMemberLastName: ''
      }
    ],
    sailingExams: [
      {
        sailingExamNumber: '',
        sailingExamDate: new Date,
        sailingExamPlace: ''
      }
    ]
  };

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  createExaminationCommitee(examinationCommittee: IExaminationCommittee) {
    this.httpService.createExaminatioCommittee(examinationCommittee)
    .subscribe ({
      next: (post: IExaminationCommittee) => {
        this.examinationCommittee = post;
        this.router.navigate(['/admin'])
      }
    })
  }

  onBack() {
    this.router.navigate(['/admin'])
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
