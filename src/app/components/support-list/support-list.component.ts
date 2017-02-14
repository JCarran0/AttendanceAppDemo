import { SupportsService } from './../../services/supports.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.css']
})
export class SupportListComponent implements OnInit {

  constructor(
    private supportService: SupportsService
  ) { }

  ngOnInit() {
  }

  get supportsByLead$() {
    // TODO: get logged in user ID
    const tokenOwnerId = 'MOCK_TOKEN_OWNER_ID';
    return this.supportService.fetchSupportsByActivityLead(tokenOwnerId);
  }

  getHuman(machine) {
    const enums = {
      'REGENTS_PREP': 'Regents Prep'
    };
    return enums[machine];
  }

}
