import { AttendanceService } from './../../services/attendance.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SupportsService, Support, Schedule } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';

@Component({
  selector: 'app-support-details',
  templateUrl: './support-details.component.html',
  styleUrls: ['./support-details.component.css']
})
export class SupportDetailsComponent implements OnInit {

  private _activeSupport: Support;

  constructor(
    private supportService: SupportsService,
    private attendanceService: AttendanceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.supportService.fetchSupportById(params['supportId']))
      .subscribe((support: Support) => this._activeSupport = support);
  }

  get schedule() {
    return this._activeSupport.schedule;
  }

  get activeSupport(): any {
    return this._activeSupport;
  }

  getHuman(machine) {
    return this.supportService.getHuman(machine);
  }

  getDateString(date: string) {
    if (!date) return '';
    return _.reverse(date.split('-')).join('/');
  }

  truncate(string) {
    return _.truncate(string, { length: 30 });
  }

  onTakeAttendanceClick(support: Support) {
    this.router.navigate(['./attendance-input', support._id]);
  }

}
