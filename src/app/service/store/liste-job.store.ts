import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';
import { Job } from '../../views/jobs/job.modele';

export interface ListeJobState extends EntityState<Job, number>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'liste-job', idKey: 'id', resettable: true })
export class ListeJobStore extends EntityStore<ListeJobState, Job> {
  constructor() {
    super();
  }

  initListeJob(jobs: Job[]): Job[] {
    jobs?.forEach((job) => {
      const newJob: Job = {...job, isFavorite: false}
      this.add(newJob);
    });
    return jobs
  }

  updateJobToListeJob(job: Job): void {
    this.update(job.id, (_oldJob) => {
      const newJob = job;
      return newJob;
    });
  }
}
