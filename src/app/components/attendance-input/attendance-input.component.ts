import { Router, ActivatedRoute, Params } from '@angular/router';
import { StudentSupport, StudentSupportService } from './../../services/student-support.service';
import { SupportsService, Support } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-input',
  templateUrl: './attendance-input.component.html',
  styleUrls: ['./attendance-input.component.css']
})
export class AttendanceInputComponent implements OnInit {

  private _studentSupports: StudentSupport[];

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
  }

  // The students who should be in this activity
  get studentSupports() {
    return this._studentSupports;
  }

}
