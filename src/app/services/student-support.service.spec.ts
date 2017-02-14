/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentSupportService } from './student-support.service';

describe('StudentSupportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentSupportService]
    });
  });

  it('should ...', inject([StudentSupportService], (service: StudentSupportService) => {
    expect(service).toBeTruthy();
  }));
});
