export interface IExam {
  sailingExamNumber: string,
  sailingExamDate: Date,
  sailingExamPlace: string,
  students: [{
      firstName: string,
      lastName: string,
      pesel: string
    }]
}
