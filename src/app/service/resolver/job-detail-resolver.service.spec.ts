import { TestBed } from '@angular/core/testing';
import { JobDetailResolverService } from './job-detail-resolver.service';

describe('JobDetailResolverService', () => {
  let service: JobDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
