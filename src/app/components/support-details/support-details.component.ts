import { Router } from '@angular/router';
import { SupportsService } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

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
  }

  get activeSupport() {
    // If no active support reroute to support list
    // (e.g.if user navigates directly to / support - details)
    if (!this.supportService.active) {
      this.router.navigate(['./support-list']);
      return;
    }
    return this.supportService.active;
  }

}
