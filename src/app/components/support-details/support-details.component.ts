import { Router } from '@angular/router';
import { SupportsService, Support, Schedule } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-support-details',
  templateUrl: './support-details.component.html',
  styleUrls: ['./support-details.component.css']
})
export class SupportDetailsComponent implements OnInit {

  constructor(
    private supportService: SupportsService,
    private router: Router
  ) { }

  ngOnInit() {
    // If no active support reroute to support list
    // (e.g.if user navigates directly to / support - details)
    if (!this.supportService.active) {
      this.router.navigate(['./support-list']);
    }
  }

  get schedule() {
    return this.activeSupport.schedule;
  }

  get activeSupport(): any {
    return this.supportService.active;
  }

  getHuman(machine) {
    return this.supportService.getHuman(machine);
  }

  getDateString(date: string) {
    if (!date) return '';
    return _.reverse(date.split('-')).join('/');
  }

  truncate(string) {
    return _.truncate(string, {length: 30});
  }

}
