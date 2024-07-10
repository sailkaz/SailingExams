


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { UserComponent } from './pages/users/user.component';
import { ManagerComponent } from './pages/managers/manager.component';
import { AdminComponent } from './pages/admins/admin.component';
import { CreateNewStudentComponent } from './students/createNewStudent/createNewStudent';
import { AddStudentToExamComponent } from './students/addStudentToExam/addStudentToExam.component';
import { GetStudentWithExamsComponent } from './students/getStudentWithExams/getStudentWithExams.component';
import { GetStudentsByExamResultComponent } from './students/getStudentsByExamResult/getStudentsByExamResult';
import { UpdateExamResultComponent } from './students/updateExamResult/updateExamResult.component';
import { DeleteStudentComponent } from './students/deleteStudent/deleteStudent.component';
import { CreateExamComponent } from './exams/createExam/createExam.component';
import { ConnectExamWithCommitteeComponent } from './exams/connectExamWithCommittee/connectExamWithCommittee.component';
import { DeleteExamComponent } from './exams/deleteExam/deleteExam.component';
import { CreateExaminationCommitteeComponent } from './committees/createExaminationCommittee/createExaminationCommittee.component';
import { GetExaminationCommitteeComponent } from './committees/getExamintionCommittee/getExaminationCommittee.component';
import { DeleteCommitteeComponent } from './committees/deleteCommittee/deleteCommittee.component';
import { GetExaminationCommitteesComponent } from './committees/getExaminationCommittees/getExaminationCommittees.component';
import { CreateCommitteeHeadComponent } from './committeeHeads/createCommitteeHead/createCommitteeHead.component';
import { GetExaminationCommitteeHeadComponent } from './committeeHeads/getExaminationCommitteeHead/getExaminationCommitteeHead.component';
import { GetExamWithStudentsComponent } from './exams/getExamWithStudents/getExamWithStudents.component';
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


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'createNewStudent', component: CreateNewStudentComponent},
  {path: 'addStudentToExam', component: AddStudentToExamComponent},
  {path: 'getStudentWithExams', component: GetStudentWithExamsComponent},
  {path: 'getExamWithStudents', component: GetExamWithStudentsComponent},
  {path: 'getStudentsByExamResult', component: GetStudentsByExamResultComponent},
  {path: 'updateExamResult', component: UpdateExamResultComponent},
  {path: 'deleteStudent', component: DeleteStudentComponent},
  {path: 'createExam', component: CreateExamComponent},
  {path: 'connectExamWithCommittee', component: ConnectExamWithCommitteeComponent},
  {path: 'deleteExam', component: DeleteExamComponent},
  {path: 'createCommittee', component: CreateExaminationCommitteeComponent},
  {path: 'getCommittee', component: GetExaminationCommitteeComponent},
  {path: 'getCommittees', component: GetExaminationCommitteesComponent},
  {path: 'deleteCommittee', component: DeleteCommitteeComponent},
  {path: 'createCommitteeHead', component: CreateCommitteeHeadComponent},
  {path: 'getExaminationCommitteeHead', component: GetExaminationCommitteeHeadComponent},
  {path: 'getExaminationCommitteeHeads', component: GetExaminationCommitteeHeadsComponent},
  {path: 'assignTheHeadOfTheCommittee', component: AssignTheHeadOfTheCommitteeComponent},
  {path: 'getCommitteeHeadWithExams', component: GetCommitteeHeadWithExamsComponent},
  {path: 'deleteCommitteeHead', component: DeleteCommitteeHeadComponent},
  {path: 'createCommitteeSecretary', component: CreateCommitteeSecretaryComponent},
  {path: 'getExaminationCommitteeSecretary', component: GetExaminationCommitteeSecretaryComponent},
  {path: 'getExaminationCommitteeSecretaries', component: GetExaminationCommitteeSecretariesComponent},
  {path: 'assingTheSecretaryOfTheCommittee', component: AssignTheSecretaryOfTheCommitteeComponent},
  {path: 'getCommitteeSecretaryWithExams', component: GetCommitteeSecretaryWithExamsComponent},
  {path: 'deleteCommitteeSecretary', component: DeleteCommitteeSecretaryComponent},
  {path: 'createCommitteeMember', component: CreateCommitteeMemberComponent},
  {path: 'getExaminationCommitteeMember', component: GetExaminationCommitteeMemberComponent},
  {path: 'getExaminationCommitteeMembers', component: GetExaminationCommitteeMembersComponent},
  {path: 'assignTheMemberOfTheCommittee', component: AssignTheMemberOfTheCommitteeComponent},
  {path: 'getCommitteeMemberWithExams', component: GetCommitteeMemberWithExamsComponent},
  {path: 'deleteCommitteeMember', component: DeleteCommitteeMemberComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
