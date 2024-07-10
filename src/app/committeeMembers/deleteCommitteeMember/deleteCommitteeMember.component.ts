import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-deleteCommitteeMember',
  templateUrl: './deleteCommitteeMember.component.html',
  styleUrls: ['./deleteCommitteeMember.component.css']
})
export class DeleteCommitteeMemberComponent {

  lastName!: string;
  responseInfo!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  deleteCommitteeMember(lastName: string) {
    this.sub = this.httpService.deleteCommitteeMember(lastName)
    .subscribe ({
      next: (post: string) => {
        this.responseInfo = post
      }
    })
    this.lastName = '';
  }

  onBack() {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
}
