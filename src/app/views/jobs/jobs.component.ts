import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Job } from './job.modele';
import { JobResumeComponent } from '../../components/job-resume/job-resume.component';
import { Subject, combineLatest, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ListeJobService } from '../../service/store/liste-job.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, JobResumeComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();

  jobs!: Job[];
  favoriteJobs: Job[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    readonly listeJobService: ListeJobService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    combineLatest([this.route.data, this.listeJobService.getListeJob()])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([data, listeJob]) => {
        if (listeJob.length === 0) {
          const jobs: Job[] = data['jobs'];
          this.jobs = this.listeJobService.initListeJob(jobs);
        } else {
          this.jobs = listeJob;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
