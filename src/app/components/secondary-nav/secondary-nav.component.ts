import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import * as _ from 'lodash';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.css']
})
export class SecondaryNavComponent implements OnInit {

  @Input() support;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  truncate(string) {
    return _.truncate(string, { length: 30 });
  }

  get supportName(): string {
    const name = this.support ? this.support.name : '';
    return this.truncate(name);
  }

  goBack() {
    this.location.back();
  }

}
