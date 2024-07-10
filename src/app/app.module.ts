import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserComponent } from './pages/users/user.component';
import { ManagerComponent } from './pages/managers/manager.component';
import { AdminComponent } from './pages/admins/admin.component';
import { CreateNewStudentComponent } from './students/createNewStudent/createNewStudent';
import { AddStudentToExamComponent } from './students/addStudentToExam/addStudentToExam.component';
import { GetStudentWithExamsComponent } from './students/getStudentWithExams/getStudentWithExams.component';
import { CustomDatepipe } from './custom.datepipe.pipe';
import { GetExamWithStudentsComponent } from './exams/getExamWithStudents/getExamWithStudents.component';
import { GetStudentsByExamResultComponent } from './students/getStudentsByExamResult/getStudentsByExamResult';
import { UpdateExamResultComponent } from './students/updateExamResult/updateExamResult.component';
import { DeleteStudentComponent } from './students/deleteStudent/deleteStudent.component';
import { CreateExamComponent } from './exams/createExam/createExam.component';
import { ConnectExamWithCommitteeComponent } from './exams/connectExamWithCommittee/connectExamWithCommittee.component';
import { DeleteExamComponent } from './exams/deleteExam/deleteExam.component';
import { CreateExaminationCommitteeComponent } from './committees/createExaminationCommittee/createExaminationCommittee.component';
import { GetExaminationCommitteeComponent } from './committees/getExamintionCommittee/getExaminationCommittee.component';
import { GetExaminationCommitteesComponent } from './committees/getExaminationCommittees/getExaminationCommittees.component';
import { DeleteCommitteeComponent } from './committees/deleteCommittee/deleteCommittee.component';
import { CreateCommitteeHeadComponent } from './committeeHeads/createCommitteeHead/createCommitteeHead.component';
import { GetExaminationCommitteeHeadComponent } from './committeeHeads/getExaminationCommitteeHead/getExaminationCommitteeHead.component';
import { GetExaminationCommitteeHeadsComponent } from './committeeHeads/getExaminationCommitteeHeads/getExaminationCommitteeHeads.component';
import { AssignTheHeadOfTheCommitteeComponent } from './committeeHeads/assignTheHeadOfTheCommittee/assignTheHeadOfTheCommittee.component';
import { GetCommitteeHeadWithExamsComponent } from './committeeHeads/getCommitteeHeadWithExams/getCommitteeHeadWithExams.component';
import { DeleteCommitteeHeadComponent } from './committeeHeads/deleteCommitteeHead/deleteCommitteeHead.component';
import { CreateCommitteeSecretaryComponent } from './committeeSecretaries/createCommitteeSecretary/createCommitteeSecretary.component';
import { GetExaminationCommitteeSecretaryComponent } from './committeeSecretaries/getExaminationCommitteeSecretary/getExaminationCommitteeSecretary.component';
import { GetExaminationCommitteeSecretariesComponent } from './committeeSecretaries/getExaminationCommitteeSecretaries/getExaminationCommitteeSecretaries.component';
import { AssignTheSecretaryOfTheCommitteeComponent } from './committeeSecretaries/assignTheSecretaryOfTheCommittee/assignTheSecretaryOfTheCommittee.component';
import { GetCommitteeSecretaryWithExamsComponent } from './committeeSecretaries/getCommitteeSecretaryWithExams/getCommitteeSecretaryWithExams.component';
import { DeleteCommitteeSecretaryComponent } from './committeeSecretaries/deleteCommitteeSecretary/deleteCommitteeSecretary.component';
import { CreateCommitteeMemberComponent } from './committeeMembers/createCommitteeMember/createCommitteeMember.component';
import { GetExaminationCommitteeMemberComponent } from './committeeMembers/getExaminationCommitteeMember/getExaminationCommitteeMember.component';
import { GetExaminationCommitteeMembersComponent } from './committeeMembers/getExaminationCommitteeMembers/getExaminationCommitteeMembers.component';
import { AssignTheMemberOfTheCommitteeComponent } from './committeeMembers/assignTheMemberOfTheCommittee/assignTheMemberOfTheCommittee.component';
import { GetCommitteeMemberWithExamsComponent } from './committeeMembers/getCommitteeMemberWithExams/getCommitteeMemberWithExams.component';
import { DeleteCommitteeMemberComponent } from './committeeMembers/deleteCommitteeMember/deleteCommitteeMember.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    ManagerComponent,
    AdminComponent,
    CreateNewStudentComponent,
    AddStudentToExamComponent,
    GetStudentWithExamsComponent,
    CustomDatepipe,
    GetExamWithStudentsComponent,
    GetStudentsByExamResultComponent,
    UpdateExamResultComponent,
    DeleteStudentComponent,
    CreateExamComponent,
    ConnectExamWithCommitteeComponent,
    DeleteExamComponent,
    CreateExaminationCommitteeComponent,
    GetExaminationCommitteeComponent,
    GetExaminationCommitteesComponent,
    DeleteCommitteeComponent,
    CreateCommitteeHeadComponent,
    GetExaminationCommitteeHeadComponent,
    GetExaminationCommitteeHeadsComponent,
    AssignTheHeadOfTheCommitteeComponent,
    GetCommitteeHeadWithExamsComponent,
    DeleteCommitteeHeadComponent,
    CreateCommitteeSecretaryComponent,
    GetExaminationCommitteeSecretaryComponent,
    GetExaminationCommitteeSecretariesComponent,
    AssignTheSecretaryOfTheCommitteeComponent,
    GetCommitteeSecretaryWithExamsComponent,
    DeleteCommitteeSecretaryComponent,
    CreateCommitteeMemberComponent,
    GetExaminationCommitteeMemberComponent,
    GetExaminationCommitteeMembersComponent,
    AssignTheMemberOfTheCommitteeComponent,
    GetCommitteeMemberWithExamsComponent,
    DeleteCommitteeMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
