import { Component } from '@angular/core';
import { IExaminationCommitteeHead } from '../../models/examinationCommitteeHead';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getExaminationCommitteeHead',
  templateUrl: './getExaminationCommitteeHead.component.html',
  styleUrls: ['./getExaminationCommitteeHead.component.css']
})
export class GetExaminationCommitteeHeadComponent {

  examinationCommitteeHead: IExaminationCommitteeHead = {
    examinationCommitteeHeadFirstName: '',
    examinationCommitteeHeadLastName: ''
  };
  lastName!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  getExaminationCommitteeHead(lastName: string) {
    this.sub = this.httpService.getExaminationCommitteeHead(lastName)
      .subscribe({
        next: (post: IExaminationCommitteeHead) => {
          this.examinationCommitteeHead = post
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
