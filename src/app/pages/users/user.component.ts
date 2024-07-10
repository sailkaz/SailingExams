import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'se-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(
    private router: Router) {
  }

  enterPersonalDetails() {
    this.router.navigate(['/createNewStudent']);
  }

  addToExam() {
    this.router.navigate(['/addStudentToExam']);
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }

}
