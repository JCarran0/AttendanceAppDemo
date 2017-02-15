import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentSupport, StudentSupportService } from './../../services/student-support.service';
import { SupportsService, Support } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-attendance-input',
  templateUrl: './attendance-input.component.html',
  styleUrls: ['./attendance-input.component.css']
})
export class AttendanceInputComponent implements OnInit {

  private _studentSupports: StudentSupport[];
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
      .subscribe((students: StudentSupport[]) => this._studentSupports = students);

    // TODO: This is not the right way to do this.  Should be chain-able to above switchMap
    this.route.params
      .switchMap((params: Params) => this.supportService.fetchSupportById(params['supportId']))
      .subscribe((support: Support) => this._activeSupport = support);
  }

  // The students who should be in this activity
  get studentSupports() {
    return this._studentSupports;
  }

  get activeSupport() {
    return this._activeSupport;
  }

  truncate(string) {
    return _.truncate(string, { length: 30 });
  }

}
