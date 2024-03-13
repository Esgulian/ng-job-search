import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Job } from '../../views/jobs/job.modele';
import { JobsHttpService } from '../jobs-http.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JobDetailResolverService {
  constructor(private jobsHttpService: JobsHttpService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Job> {
    const idJob = route.params['id'];
    return this.jobsHttpService.getJobDetail(idJob).pipe(retry(5));
  }
}
