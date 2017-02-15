import { MockSupports } from './../mocks/supports.mock';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as _ from 'lodash';


export interface UserMini {
  userId: string;
  firstName: string;
  lastName: string;
  preferredEmail: string;
  gafeEmail: string;
  doeEmail: string;
}

export interface SupportMetaData {
  examSubject?: string;
}

export interface Schedule {
  repeats: string;
  repeatsEvery: number;
  repeatsBy: string;
  repeatsOn: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  };
  startsOn: string;
  endsOn: string;
  startTime: string;
  endTime: string;
}

export interface Support {
  _id: string;
  schoolId: string;
  category: string;
  name: string;
  description: string;
  createdBy: UserMini;
  location: string;
  schedule: Schedule;
  activityLead: UserMini;
  primaryOutcomeMetrics: string[];
  metaData: SupportMetaData;
}

@Injectable()
export class SupportsService {

  constructor(
    private http: Http
  ) { }

  // TODO: not sure if this belongs here, but it gets called from multiple components
  getHuman(machine) {
    const enums = {
      'REGENTS_PREP': 'Regents Prep'
    };
    return enums[machine];
  }


  // TODO: Maybe API calls should be in separate service?
  // TODO: Mocked API Request here for now
  fetchSupportsByActivityLead(leadId: string): Observable<Support[]> {
    // const API_URL = 'API_URL';
    // // ...Angular get returns an observable
    // return this.http.get(API_URL)
    //   // call .json() on the response to return data, rather than JSON string
    //   .map((res: Response) => res.json())
    //   // catch errors, but still return observable
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return Observable.from([MockSupports]);
  }

  fetchSupportById(supportId: string): Observable<Support> {
    const Mocked = _.find(MockSupports, { _id: supportId });
    return Observable.from([Mocked]);
  }
}
