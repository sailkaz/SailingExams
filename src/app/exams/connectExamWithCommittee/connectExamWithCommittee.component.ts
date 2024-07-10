import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'se-connectExamWithCommittee',
  templateUrl: './connectExamWithCommittee.component.html',
  styleUrls: ['./connectExamWithCommittee.component.css']
})
export class ConnectExamWithCommitteeComponent {
  sailingExamNumber!: string;
  examinationCommitteeId!: number;
  responseInfo!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}


  connectExamWithCommittee(examinationCommitteeId: number, sailingExamNumber: string) {
    this.sub = this.httpService.connectExamWithCommittee(examinationCommitteeId, sailingExamNumber)
    .subscribe({
      next: post => {
        this.responseInfo = post;
      }
    })
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
}
