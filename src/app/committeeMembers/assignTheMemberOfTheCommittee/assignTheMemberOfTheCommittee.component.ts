import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-assignTheMemberOfTheCommittee',
  templateUrl: './assignTheMemberOfTheCommittee.component.html',
  styleUrls: ['./assignTheMemberOfTheCommittee.component.css']
})
export class AssignTheMemberOfTheCommitteeComponent {

  lastName!: string;
  examinationCommitteeId!: number;
  sub!: Subscription;
  responseInfo!: string;

  constructor(
    private httpService: HttpService,
    private router: Router) {}

    connectCommitteeMemberAndCommittee(examinationCommitteeId: number, lastName: string) {
      this.httpService.connectCommitteeMemberAndCommittee(examinationCommitteeId, lastName)
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
