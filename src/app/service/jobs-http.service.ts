import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../views/jobs/job.modele';
import { JobDetail } from '../components/job-detail/job-detail.modele';

@Injectable({
  providedIn: 'root',
})
export class JobsHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>('/jobs');
  }

  getJobDetail(idJob: string): Observable<JobDetail> {
    return this.httpClient.get<JobDetail>(`/jobs/${idJob}`);
  }
}
