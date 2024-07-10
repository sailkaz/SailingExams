import { Component } from '@angular/core';
import { IExaminationCommitteeSecretary } from '../../models/examinationCommitteeSecretary';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-getExaminationCommitteeSecretary',
  templateUrl: './getExaminationCommitteeSecretary.component.html',
  styleUrls: ['./getExaminationCommitteeSecretary.component.css']
})
export class GetExaminationCommitteeSecretaryComponent {

  examinationCommitteeSecretary: IExaminationCommitteeSecretary = {
    examinationCommitteeSecretaryFirstName: '',
    examinationCommitteeSecretaryLastName: ''
  };
  lastName!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  GetExaminationCommitteeSecretary(lastName: string) {
    this.sub = this.httpService.getExaminationCommitteeSecretary(lastName)
      .subscribe({
        next: (post: IExaminationCommitteeSecretary) => {
          this.examinationCommitteeSecretary = post
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
