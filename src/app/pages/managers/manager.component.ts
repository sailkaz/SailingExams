import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'se-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private router: Router) {

  }

  GetStudentWithAddressAndExams() {
    this.router.navigate(['/getStudentWithExams']);
  }

  GetExamWithStudents() {
    this.router.navigate(['/getExamWithStudents']);
  }

  GetStudentsWhoPassedTheExam() {
    this.router.navigate(['/getStudentsByExamResult'])
  }

  UpdateExamResult() {
    this.router.navigate(['/updateExamResult'])
  }

  DeleteStudent() {
    this.router.navigate(['/deleteStudent'])
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }

}
