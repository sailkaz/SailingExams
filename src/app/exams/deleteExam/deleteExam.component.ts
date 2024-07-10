import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'se-deleteExam',
  templateUrl: './deleteExam.component.html',
  styleUrls: ['./deleteExam.component.css']
})
export class DeleteExamComponent {

  sailingExamNumber!: string;
  responseInfo!: string;
  sub!: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router) {}


  deleteExam(sailingExamNumber: string) {
    this.sub = this.httpService.deleteExam(sailingExamNumber)
    .subscribe({
      next: post =>
      this.responseInfo = post
    });
    this.sailingExamNumber = '';
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }

  ngOnDestroy(): void {
    if(this.sub)
    this.sub.unsubscribe();
  }
}
