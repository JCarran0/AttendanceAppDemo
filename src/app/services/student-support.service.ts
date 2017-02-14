import { StudentSupportMocks } from './../mocks/student-support.mock';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface StudentSupport {
  _id: string;
  schoolId: string;
  student: {
    studentId: string;
    lastFirst: string;
  };
  assignedOn: string;
  startsOn: string;
  reviewOn: string[];
  assignedBy: {
    userId: string;
    firstName: string;
    lastName: string;
    preferredEmail: string;
    gafeEmail: string;
    doeEmail: string;
  },
  status: string;
  support: {
    supportId: string;
    name: string;
    category: string;
    metaData: {
      examSubject: string;
    };
  };
  initialPrimaryOutcomeMetrics: {
    studentPath: string;
    value: number;
  }[];
}

@Injectable()
export class StudentSupportService {

  constructor() { }

  fetchStudentSupportsBySupportId(supportId: string): Observable<StudentSupport[]> {
    // const API_URL = 'API_URL';
    // // ...Angular get returns an observable
    // return this.http.get(API_URL)
    //   // call .json() on the response to return data, rather than JSON string
    //   .map((res: Response) => res.json())
    //   // catch errors, but still return observable
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return Observable.from([StudentSupportMocks]);
  }

}
