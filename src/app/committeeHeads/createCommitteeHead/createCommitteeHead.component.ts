import { Component } from '@angular/core';
import { IExaminationCommitteeHead } from '../../models/examinationCommitteeHead';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-createCommitteeHead',
  templateUrl: './createCommitteeHead.component.html',
  styleUrls: ['./createCommitteeHead.component.css']
})
export class CreateCommitteeHeadComponent {

  examinationCommitteeHead: IExaminationCommitteeHead = {
    examinationCommitteeHeadFirstName: '',
    examinationCommitteeHeadLastName: ''
  }

  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  createExaminationCommitteeHead(examinationCommitteeHead: IExaminationCommitteeHead) {
    this.sub = this.httpService.createExaminationCommitteeHead(examinationCommitteeHead)
    .subscribe({
      next: (post: IExaminationCommitteeHead) => {
        this.examinationCommitteeHead = post
      }
    })
    this.examinationCommitteeHead.examinationCommitteeHeadFirstName = '';
    this.examinationCommitteeHead.examinationCommitteeHeadLastName = '';
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
