import { IExaminationCommittee } from './../models/examinationCommittee';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IStudent } from '../models/student';
import { AuthInterceptor } from '../interceptors/auth.interceptor';
import { Router } from '@angular/router';
import { IExam } from '../models/exam';
import { IStudentByExamResult } from '../models/studentByExamResult';
import { IUpdateExamResult } from '../models/updateExamResult';
import { IExaminationCommitteeHead } from '../models/examinationCommitteeHead';
import { IExaminationCommitteeSecretary } from '../models/examinationCommitteeSecretary';
import { IExaminationCommitteeMember } from '../models/examinationCommitteeMember';


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private url = 'https://localhost:7169/api';

  constructor(
    private httpService: HttpClient,
    private router: Router) { }


  // student's methods
  public createStudent(student: IStudent): Observable<IStudent> {
    return this.httpService.post<IStudent>(this.url + '/students', student)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  public addStudentToExam(pesel: string, sailingExamNumber: string): Observable<string> {
    return this.httpService.post<string>(`${this.url}/students/${pesel}/${sailingExamNumber}`, null, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  // manager's methods
  public getStudentWithExams(pesel: string): Observable<IStudent> {
    return this.httpService.get<IStudent>(`${this.url}/students/${pesel}`)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExamWithStudents(sailingExamNumber: string): Observable<IExam> {
    return this.httpService.get<IExam>(`${this.url}/sailingExams/${sailingExamNumber}`)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getStudentsWhoPassedTheExam(examResult: string, sailingExamNumber: string): Observable<Array<IStudentByExamResult>> {
    return this.httpService.get<Array<IStudentByExamResult>>(`${this.url}/students/${examResult}/${sailingExamNumber}`)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public updateExamResult(pesel: string, examResult: IUpdateExamResult): Observable<any> {
    return this.httpService.patch(this.url + '/students/' + pesel, [examResult], {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json-patch+json'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public addExamResult(pesel: string, result: string): Observable<any> {
    return this.httpService.put(`${this.url}/students/${pesel}/${result}`, null)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public deleteStudent(pesel: string): Observable<string> {
    return this.httpService.delete<string>(this.url + '/students/' + pesel, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  // admin's methods
  public createExam(exam: IExam): Observable<IExam> {
    return this.httpService.post<IExam>(this.url + '/sailingExams', exam)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
      )
  }

  public connectExamWithCommittee(examinationCommitteeId: number, sailingExamNumber: string): Observable<string> {
    return this.httpService.get<string>(`${this.url}/sailingExams/${examinationCommitteeId}/${sailingExamNumber}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public deleteExam(sailingExamNumber: string): Observable<string> {
    return this.httpService.delete<string>(this.url + '/sailingExams/' + sailingExamNumber, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public createExaminatioCommittee(examinationCommittee: IExaminationCommittee): Observable<IExaminationCommittee> {
    return this.httpService.post<IExaminationCommittee>(this.url + '/examinationCommittee', examinationCommittee)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommittees(): Observable<Array<IExaminationCommittee>> {
    return this.httpService.get<Array<IExaminationCommittee>>(this.url + '/examinationCommittee')
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommittee(examinationCommitteeId: number): Observable<IExaminationCommittee> {
    return this.httpService.get<IExaminationCommittee>(this.url + '/examinationCommittee/' + examinationCommitteeId)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public deleteExaminationCommittee(examinationCommitteeId: number): Observable<string> {
    return this.httpService.delete<string>(this.url + '/examinationCommittee/' + examinationCommitteeId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public createExaminationCommitteeHead(examinationCommitteeHead: IExaminationCommitteeHead): Observable<IExaminationCommitteeHead> {
    return this.httpService.post<IExaminationCommitteeHead>(this.url + '/examinationCommitteeHead', examinationCommitteeHead)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommitteeHead(lastName: string): Observable<IExaminationCommitteeHead> {
    return this.httpService.get<IExaminationCommitteeHead>(this.url + '/examinationCommitteeHead/' + lastName)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommitteeHeads(): Observable<Array<IExaminationCommitteeHead>> {
    return this.httpService.get<Array<IExaminationCommitteeHead>>(this.url + '/examinationCommitteeHead/')
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public connectCommitteeHeadAndCommittee(examinationCommitteeId: number, lastName: string): Observable<string> {
    return this.httpService.get<string>(`${this.url}/examinationCommitteeHead/${examinationCommitteeId}/${lastName}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  getCommitteeHeadWithExams(lastName: string): Observable<IExam[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("lastName", lastName)
    return this.httpService.get<IExam[]>(this.url + '/examinationCommitteeHead/committeeHeadWithExams', { params: queryParams })
      .pipe(
        tap(data => console.log('All ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  deleteCommitteeHead(lastName: string): Observable<string> {
    let queryParams = new HttpParams;
    queryParams = queryParams.append("lastName", lastName)
    return this.httpService.delete<string>(this.url + '/examinationCommitteeHead'
      , {
        params: queryParams,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application'
        }
      }
    )
      .pipe(
        tap(data => console.log('All ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public createExaminationCommitteeSecretary(examinationCommitteeSecretary: IExaminationCommitteeSecretary): Observable<IExaminationCommitteeSecretary> {
    return this.httpService.post<IExaminationCommitteeSecretary>(this.url + '/examinationCommitteeSecretary', examinationCommitteeSecretary)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommitteeSecretary(lastName: string): Observable<IExaminationCommitteeSecretary> {
    return this.httpService.get<IExaminationCommitteeSecretary>(this.url + '/examinationCommitteeSecretary/' + lastName)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommitteeSecretaries(): Observable<Array<IExaminationCommitteeSecretary>> {
    return this.httpService.get<Array<IExaminationCommitteeSecretary>>(this.url + '/examinationCommitteeSecretary/')
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public connectCommitteeSecretaryAndCommittee(examinationCommitteeId: number, lastName: string): Observable<string> {
    return this.httpService.get<string>(`${this.url}/examinationCommitteeSecretary/${examinationCommitteeId}/${lastName}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  getCommitteeSecretaryWithExams(lastName: string): Observable<IExam[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("lastName", lastName)
    return this.httpService.get<IExam[]>(this.url + '/examinationCommitteeSecretary/committeeSecretaryWithExams', { params: queryParams })
      .pipe(
        tap(data => console.log('All ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  deleteCommitteeSecretary(lastName: string): Observable<string> {
    let queryParams = new HttpParams;
    queryParams = queryParams.append("lastName", lastName)
    return this.httpService.delete<string>(this.url + '/examinationCommitteeSecretary'
      , {
        params: queryParams,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application'
        }
      }
    )
      .pipe(
        tap(data => console.log('All ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public createExaminationCommitteeMember(examinationCommitteeMember: IExaminationCommitteeMember): Observable<IExaminationCommitteeMember> {
    return this.httpService.post<IExaminationCommitteeMember>(this.url + '/examinationCommitteeMember', examinationCommitteeMember)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommitteeMember(lastName: string): Observable<IExaminationCommitteeMember> {
    return this.httpService.get<IExaminationCommitteeMember>(this.url + '/examinationCommitteeMember/' + lastName)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public getExaminationCommitteeMembers(): Observable<Array<IExaminationCommitteeMember>> {
    return this.httpService.get<Array<IExaminationCommitteeMember>>(this.url + '/examinationCommitteeMember/')
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  public connectCommitteeMemberAndCommittee(examinationCommitteeId: number, lastName: string): Observable<string> {
    return this.httpService.get<string>(`${this.url}/examinationCommitteeMember/${examinationCommitteeId}/${lastName}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application'
      }
    })
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  getCommitteeMemberWithExams(lastName: string): Observable<IExam[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("lastName", lastName)
    return this.httpService.get<IExam[]>(this.url + '/examinationCommitteeMember/committeeMemberWithExams', { params: queryParams })
      .pipe(
        tap(data => console.log('All ', JSON.stringify(data))),
        catchError(this.handleError));
  }

  deleteCommitteeMember(lastName: string): Observable<string> {
    let queryParams = new HttpParams;
    queryParams = queryParams.append("lastName", lastName)
    return this.httpService.delete<string>(this.url + '/examinationCommitteeMember'
      , {
        params: queryParams,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application'
        }
      }
    )
      .pipe(
        tap(data => console.log('All ', JSON.stringify(data))),
        catchError(this.handleError));
  }


  // common methods
  public logout() {
    this.httpService.post(this.url + '/account/logout', {}, { withCredentials: true })
      .subscribe(() => {
        AuthInterceptor.accessToken = '';
        this.router.navigate(['/'])
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      //this.errorMessage = error;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}



