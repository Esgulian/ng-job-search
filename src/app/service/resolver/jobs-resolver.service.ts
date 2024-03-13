import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Job } from '../../views/jobs/job.modele';
import { JobsHttpService } from '../jobs-http.service';

@Injectable({
  providedIn: 'root',
})
export class JobsResolverService {
  constructor(private jobsHttpService: JobsHttpService) {}

  resolve(): Observable<Job[]> {
    return this.jobsHttpService.getJobs().pipe(retry(5));
  }
}
