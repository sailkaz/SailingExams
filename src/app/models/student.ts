export interface IStudent {
  firstName: string,
  lastName: string,
  pesel: string,
  result: string,
  address: {
    street: string,
    streetNumber: string,
    flatNumber?: number,
    postalCode: string,
    city: string
  },
  sailingExams:  [{
    sailingExamNumber: string,
    sailingExamDate: Date,
    sailingExamPlace: string
  }]
}
