import { Router } from '@angular/router';
import { StudentSupport, StudentSupportService } from './../../services/student-support.service';
import { SupportsService } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-input',
  templateUrl: './attendance-input.component.html',
  styleUrls: ['./attendance-input.component.css']
})
export class AttendanceInputComponent implements OnInit {

  constructor(
    private supportService: SupportsService,
    private stdntSupportService: StudentSupportService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.supportService.active) {
      this.router.navigate(['./support-list']);
    }
  }

  // The students who should be in this activity
  get _activeStudents$() {
    // tslint:disable-next-line:curly
    if (!this.supportService.active) return {};
    return this.stdntSupportService.fetchStudentSupportsBySupportId(this.supportService.active._id);
  }

}
