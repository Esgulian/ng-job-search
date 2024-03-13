import { TestBed } from '@angular/core/testing';

import { JobsResolverService } from './jobs-resolver.service';

describe('JobsResolverService', () => {
  let service: JobsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
