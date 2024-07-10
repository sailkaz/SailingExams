import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { IStudent } from '../../models/student';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'se-studentWithExams',
  templateUrl: './getStudentWithExams.component.html',
  styleUrls: ['./getStudentWithExams.component.css']
})
export class GetStudentWithExamsComponent {

  pesel!: string;
  sub!: Subscription;

  student!: IStudent;

  constructor(
    private httpService: HttpService,
    private router: Router) {

  }

  getStudentWithExams(pesel: string) {
    this.sub=this.httpService.getStudentWithExams(pesel)
    .subscribe({
      next: (student: IStudent) => {
        this.student = student
      }
    });
    this.pesel = '';
  }

  onBack(): void {
    this.router.navigate(['/manager'])
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}

