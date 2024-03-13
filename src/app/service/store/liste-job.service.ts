import { Injectable } from '@angular/core';
import { ListeJobStore } from './liste-job.store';
import { ListeJobQuery } from './liste-job.query';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job } from '../../views/jobs/job.modele';

@Injectable({
  providedIn: 'root',
})
export class ListeJobService {
  onListeJobPage = new BehaviorSubject(true);

  constructor(
    private readonly listeJobStore: ListeJobStore,
    private readonly listeJobQuery: ListeJobQuery
  ) {}

  getListeJob(): Observable<Job[]> {
    return this.listeJobQuery.listeJob$;
  }

  getListeFavorite(): Observable<Job[]> {
    return this.listeJobQuery.listeFavorite$;
  }

  initListeJob(jobs: Job[]): Job[] {
    return this.listeJobStore.initListeJob(jobs);
  }

  updateJobToListJob(job: Job): void {
    this.listeJobStore.updateJobToListeJob(job);
  }
}
