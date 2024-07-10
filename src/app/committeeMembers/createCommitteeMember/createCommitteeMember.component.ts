import { Component } from '@angular/core';
import { IExaminationCommitteeMember } from '../../models/examinationCommitteeMember';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-createCommitteeMember',
  templateUrl: './createCommitteeMember.component.html',
  styleUrls: ['./createCommitteeMember.component.css']
})
export class CreateCommitteeMemberComponent {
  examinationCommitteeMember: IExaminationCommitteeMember = {
    examinationCommitteeMemberFirstName: '',
    examinationCommitteeMemberLastName: ''
  }

  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  createExaminationCommitteeMember(examinationCommitteeMember: IExaminationCommitteeMember) {
    this.sub = this.httpService.createExaminationCommitteeMember(examinationCommitteeMember)
      .subscribe({
        next: (post: IExaminationCommitteeMember) => {
          this.examinationCommitteeMember = post
        }
      })
    this.examinationCommitteeMember.examinationCommitteeMemberFirstName = '';
    this.examinationCommitteeMember.examinationCommitteeMemberLastName = '';
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
