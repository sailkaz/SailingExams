import { Component } from '@angular/core';
import { IExaminationCommitteeMember } from '../../models/examinationCommitteeMember';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getExaminationCommitteeMembers',
  templateUrl: './getExaminationCommitteeMembers.component.html',
  styleUrls: ['./getExaminationCommitteeMembers.component.css']
})
export class GetExaminationCommitteeMembersComponent {
  examinationCommitteeMembers!: IExaminationCommitteeMember[];


  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  getExaminationCommitteeMembers() {
    this.sub = this.httpService.getExaminationCommitteeMembers()
      .subscribe({
        next: (posts: IExaminationCommitteeMember[]) => {
          this.examinationCommitteeMembers = posts
        }
      });
  }

  onBack() {
    this.router.navigate(['/admin'])
  }

  ngOnDestroy(): void {
    if (this.sub)
      this.sub.unsubscribe();
  }
}
