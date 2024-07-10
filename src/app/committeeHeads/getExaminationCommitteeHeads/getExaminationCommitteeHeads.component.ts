import { Component } from '@angular/core';
import { IExaminationCommitteeHead } from '../../models/examinationCommitteeHead';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-get-examination-committee-heads',
  templateUrl: './getExaminationCommitteeHeads.component.html',
  styleUrls: ['./getExaminationCommitteeHeads.component.css']
})
export class GetExaminationCommitteeHeadsComponent {

  examinationCommitteeHeads!: IExaminationCommitteeHead[];


  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  getExaminationCommitteeHeads() {
    this.sub = this.httpService.getExaminationCommitteeHeads()
      .subscribe({
        next: (posts: IExaminationCommitteeHead[]) => {
          this.examinationCommitteeHeads = posts
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
