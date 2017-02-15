import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentSupport, StudentSupportService } from './../../services/student-support.service';
import { SupportsService, Support } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

interface AttendanceLogItem extends StudentSupport {
  wasAbsent: boolean;
}

@Component({
  selector: 'app-attendance-input',
  templateUrl: './attendance-input.component.html',
  styleUrls: ['./attendance-input.component.css']
})
export class AttendanceInputComponent implements OnInit {

  private _logItems: AttendanceLogItem[];
  private _activeSupport: Support;


  constructor(
    private supportService: SupportsService,
    private stdntSupportService: StudentSupportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.stdntSupportService.fetchStudentSupportsBySupportId(params['supportId']))
      .subscribe((studentSupports: StudentSupport[]) => {
        this._logItems = studentSupports.map(studSupp => {
          return _.assign({}, studSupp, { wasAbsent: false });
        });
      });

    // TODO: This is not the right way to do this.  Should be chain-able to above switchMap
    this.route.params
      .switchMap((params: Params) => this.supportService.fetchSupportById(params['supportId']))
      .subscribe((support: Support) => this._activeSupport = support);
  }

  // The students who should be in this activity
  get logItems() {
    return this._logItems;
  }

  get activeSupport() {
    return this._activeSupport;
  }

  get countOfPresent() {
    return this.logItems.reduce((count, item) => {
      if (!item.wasAbsent) count++;
      return count;
    }, 0);
  }

  get countOfAbsent() {
    return this.logItems.reduce((count, item) => {
      if (item.wasAbsent) count++;
      return count;
    }, 0);
  }

  getLabel(wasAbsent: boolean): string {
    return wasAbsent ? 'Absent' : 'Present';
  }

}
