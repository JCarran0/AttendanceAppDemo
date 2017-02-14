import { MockAttendanceRecords } from './../mocks/attendanceRecords.mock';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface AttendanceRecord {
  _id: string;
  supportId: string;
  studentId: string;
  eventDate: string;
  loggedAt: string;
  didAttend: boolean;
  notes: string;
}

@Injectable()
export class AttendanceService {

  constructor() { }

  fetchAttendanceForSupport(supportId: string): Observable<AttendanceRecord[]> {
    // const API_URL = 'API_URL';
    // // ...Angular get returns an observable
    // return this.http.get(API_URL)
    //   // call .json() on the response to return data, rather than JSON string
    //   .map((res: Response) => res.json())
    //   // catch errors, but still return observable
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return Observable.from([MockAttendanceRecords]);
  }

}
