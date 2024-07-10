export interface IExaminationCommittee {
  examinationCommitteeId: number,
  examinationCommitteeHead: {
    examinationCommitteeHeadFirstName: string,
    examinationCommitteeHeadLastName: string
  },
  examinationCommitteeSecretary: {
    examinationCommitteeSecretaryFirstName: string,
    examinationCommitteeSecretaryLastName: string
  },
  examinationCommitteeMembers: [
    {
      examinationCommitteeMemberFirstName: string,
      examinationCommitteeMemberLastName: string
    }
  ],
  sailingExams: [
    {
      sailingExamNumber: string,
      sailingExamDate: Date,
      sailingExamPlace: string
    }
  ]
}
