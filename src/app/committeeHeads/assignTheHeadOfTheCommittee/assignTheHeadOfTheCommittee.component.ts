import { Component } from '@angular/core';
import { Subscription, last } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'se-assignTheHeadOfTheCommittee',
  templateUrl: './assignTheHeadOfTheCommittee.component.html',
  styleUrls: ['./assignTheHeadOfTheCommittee.component.css']
})
export class AssignTheHeadOfTheCommitteeComponent {

  lastName!: string;
  examinationCommitteeId!: number;
  sub!: Subscription;
  responseInfo!: string;

  constructor(
    private httpService: HttpService,
    private router: Router) {}

    connectCommitteeHeadAndCommittee(examinationCommitteeId: number, lastName: string) {
     this.sub = this.httpService.connectCommitteeHeadAndCommittee(examinationCommitteeId, lastName)
      .subscribe ({
        next: post => {
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
