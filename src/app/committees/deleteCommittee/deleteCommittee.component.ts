import { HttpService } from './../../services/http.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'se-deleteCommittee',
  templateUrl: './deleteCommittee.component.html',
  styleUrls: ['./deleteCommittee.component.css']
})
export class DeleteCommitteeComponent {

  examinationCommitteeId!: number;
  responseInfo!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router) {}

  deleteExaminationCommittee(examinationCommitteeId: number) {
    this.sub = this.httpService.deleteExaminationCommittee(examinationCommitteeId)
    .subscribe({
      next: (post: string) => {
        this.responseInfo = post
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }

}
