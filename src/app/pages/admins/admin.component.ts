import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'se-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router) {}

  CreateExam() {
    this.router.navigate(['/createExam']);
  }

  ConnectExamWithCommittee() {
    this.router.navigate(['/connectExamWithCommittee']);
  }

  DeleteExam() {
    this.router.navigate(['/deleteExam']);
  }

  CreateExaminationCommittee() {
    this.router.navigate(['/createCommittee']);
  }

  GetExaminationCommittees() {
    this.router.navigate(['/getCommittees']);
  }

  GetExaminationCommittee() {
    this.router.navigate(['/getCommittee']);
  }

  DeleteExaminationCommittee() {
    this.router.navigate(['/deleteCommittee']);
  }

  CreateExaminationCoommitteeHead() {
    this.router.navigate(['/createCommitteeHead']);
  }

  GetExaminationCommitteeHead() {
    this.router.navigate(['/getExaminationCommitteeHead']);
  }

  GetExaminationCommitteeHeads() {
    this.router.navigate(['/getExaminationCommitteeHeads']);
  }

  ConnectCommitteeHeadAndCommittee() {
    this.router.navigate(['assignTheHeadOfTheCommittee']);
  }

  GetCommitteeHeadWithExams() {
    this.router.navigate(['/getCommitteeHeadWithExams']);
  }

  DeleteExaminationCommitteeHead() {
    this.router.navigate(['/deleteCommitteeHead']);
  }

  CreateExaminationCoommitteeSecretary() {
    this.router.navigate(['/createCommitteeSecretary']);
  }

  GetExaminationCommitteeSecretary() {
    this.router.navigate(['/getExaminationCommitteeSecretary']);
  }

  GetExaminationCommitteeSecretaries() {
    this.router.navigate(['/getExaminationCommitteeSecretaries']);
  }

  ConnectCommitteeSecretaryAndCommittee() {
    this.router.navigate(['/assingTheSecretaryOfTheCommittee']);
  }

  GetCommitteeSecretaryWithExams() {
    this.router.navigate(['/getCommitteeSecretaryWithExams']);
  }

  DeleteExaminationCommitteeSecretary() {
    this.router.navigate(['/deleteCommitteeSecretary']);
  }

  CreateExaminationCommitteeMember() {
    this.router.navigate(['/createCommitteeMember']);
  }

  GetExaminationCommitteeMember() {
    this.router.navigate(['/getExaminationCommitteeMember']);
  }

    GetExaminationCommitteeMembers() {
      this.router.navigate(['/getExaminationCommitteeMembers']);
    }

    ConnectCommitteeMemberAndCommittee() {
      this.router.navigate(['/assignTheMemberOfTheCommittee']);
    }

    GetCommitteeMemberWithExams() {
      this.router.navigate(['/getCommitteeMemberWithExams'])
    }

    DeleteExaminationCommitteeMember() {
      this.router.navigate(['/deleteCommitteeMember'])
    }

    onBack(): void {
      this.router.navigate(['/home']);
    }

  }
