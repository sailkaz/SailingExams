import { Component } from '@angular/core';
import { IExaminationCommitteeMember } from '../../models/examinationCommitteeMember';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getExaminationCommitteeMember',
  templateUrl: './getExaminationCommitteeMember.component.html',
  styleUrls: ['./getExaminationCommitteeMember.component.css']
})
export class GetExaminationCommitteeMemberComponent {
  examinationCommitteeMember: IExaminationCommitteeMember = {
    examinationCommitteeMemberFirstName: '',
    examinationCommitteeMemberLastName: ''
  };
  lastName!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  GetExaminationCommitteeMember(lastName: string) {
    this.sub = this.httpService.getExaminationCommitteeMember(lastName)
      .subscribe({
        next: (post: IExaminationCommitteeMember) => {
          this.examinationCommitteeMember = post
        }
      }),
      this.lastName = '';
  }

  onBack() {
    this.router.navigate(['/admin'])
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe();
  }
}
