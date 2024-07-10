import { Component } from '@angular/core';
import { IExaminationCommitteeSecretary } from '../../models/examinationCommitteeSecretary';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getExaminationCommitteeSecretaries',
  templateUrl: './getExaminationCommitteeSecretaries.component.html',
  styleUrls: ['./getExaminationCommitteeSecretaries.component.css']
})
export class GetExaminationCommitteeSecretariesComponent {

  examinationCommitteeSecretaries!: IExaminationCommitteeSecretary[];


  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  getExaminationCommitteeSecretaries() {
    this.sub = this.httpService.getExaminationCommitteeSecretaries()
      .subscribe({
        next: (posts: IExaminationCommitteeSecretary[]) => {
          this.examinationCommitteeSecretaries = posts
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
