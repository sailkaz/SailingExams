import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-deleteCommitteeSecretary',
  templateUrl: './deleteCommitteeSecretary.component.html',
  styleUrls: ['./deleteCommitteeSecretary.component.css']
})
export class DeleteCommitteeSecretaryComponent {

  lastName!: string;
  responseInfo!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  deleteCommitteeSecretary(lastName: string) {
    this.sub = this.httpService.deleteCommitteeSecretary(lastName)
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
