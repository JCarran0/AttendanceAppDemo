/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SupportsService } from './supports.service';

describe('SupportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportsService]
    });
  });

  it('should ...', inject([SupportsService], (service: SupportsService) => {
    expect(service).toBeTruthy();
  }));
});
