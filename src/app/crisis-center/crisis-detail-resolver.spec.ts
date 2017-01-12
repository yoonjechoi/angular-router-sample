/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrisisDetailResolver } from './crisis-detail-resolver';

describe('CrisisDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrisisDetailResolver]
    });
  });

  it('should ...', inject([CrisisDetailResolver], (service: CrisisDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
