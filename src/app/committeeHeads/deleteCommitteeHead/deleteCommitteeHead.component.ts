import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-deleteCommitteeHead',
  templateUrl: './deleteCommitteeHead.component.html',
  styleUrls: ['./deleteCommitteeHead.component.css']
})
export class DeleteCommitteeHeadComponent {

  lastName!: string;
  responseInfo!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  deleteCommitteeHead(lastName: string) {
    this.sub = this.httpService.deleteCommitteeHead(lastName)
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
