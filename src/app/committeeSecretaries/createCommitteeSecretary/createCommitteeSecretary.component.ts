import { Component } from '@angular/core';
import { IExaminationCommitteeSecretary } from '../../models/examinationCommitteeSecretary';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-createCommitteeSecretary',
  templateUrl: './createCommitteeSecretary.component.html',
  styleUrls: ['./createCommitteeSecretary.component.css']
})
export class CreateCommitteeSecretaryComponent {

  examinationCommitteeSecretary: IExaminationCommitteeSecretary = {
    examinationCommitteeSecretaryFirstName: '',
    examinationCommitteeSecretaryLastName: ''
  }

  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  createExaminationCommitteeSecretary(examinationCommitteeSecretary: IExaminationCommitteeSecretary) {
    this.sub = this.httpService.createExaminationCommitteeSecretary(examinationCommitteeSecretary)
      .subscribe({
        next: (post: IExaminationCommitteeSecretary) => {
          this.examinationCommitteeSecretary = post
        }
      })
    this.examinationCommitteeSecretary.examinationCommitteeSecretaryFirstName = '';
    this.examinationCommitteeSecretary.examinationCommitteeSecretaryLastName = '';
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
