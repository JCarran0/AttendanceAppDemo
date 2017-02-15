import { SupportsService, Support } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {

  constructor(
    private supportService: SupportsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSupportSelect(support: Support) {
    this.router.navigate(['./support-details', support._id]);
  }

  get supportsByLead$() {
    // TODO: get logged in user ID
    const tokenOwnerId = 'MOCK_TOKEN_OWNER_ID';
    return this.supportService.fetchSupportsByActivityLead(tokenOwnerId);
  }

  getHuman(machine) {
    return this.supportService.getHuman(machine);
  }

}
