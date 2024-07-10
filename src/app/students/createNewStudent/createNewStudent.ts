import { Component, } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';
import { IStudent } from '../../models/student';
import { Router } from '@angular/router';


@Component({
  selector: 'se-createNewStudent',
  templateUrl: './createNewStudent.html',
  styleUrls: ['./createNewStudent.css']
})
export class CreateNewStudentComponent {

  sub!: Subscription;

  student: IStudent = {
    firstName: '',
    lastName: '',
    pesel: '',
    result: '',
    address: {
      street: '',
      streetNumber: '',
      flatNumber: 0,
      postalCode: '',
      city: ''
    }
    ,
    sailingExams: [{
      sailingExamNumber: '',
      sailingExamDate: new Date,
      sailingExamPlace: ''
    }]
  }

  constructor(
    private httpService: HttpService,
    private router: Router) {

  }


  createStudent(student: IStudent) {
    this.sub = this.httpService.createStudent(student)
      .subscribe({
        next: student => {
          this.student = student
          this.router.navigate(['user']);
        }
      });
  }

  onBack(): void {
    this.router.navigate(['/user']);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}



