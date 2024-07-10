import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-assignTheSecretaryOfTheCommittee',
  templateUrl: './assignTheSecretaryOfTheCommittee.component.html',
  styleUrls: ['./assignTheSecretaryOfTheCommittee.component.css']
})
export class AssignTheSecretaryOfTheCommitteeComponent {
  lastName!: string;
  examinationCommitteeId!: number;
  sub!: Subscription;
  responseInfo!: string;

  constructor(
    private httpService: HttpService,
    private router: Router) {}

    connectCommitteeSecretaryAndCommittee(examinationCommitteeId: number, lastName: string) {
      this.httpService.connectCommitteeSecretaryAndCommittee(examinationCommitteeId, lastName)
      .subscribe ({
        next: (post: string) => {
          this.responseInfo = post
        }
      })
    }

    onBack() {
      this.router.navigate(['/admin']);
    }

    ngOnDestroy(): void {
      if(this.sub)
      this.sub.unsubscribe();
    }
}
