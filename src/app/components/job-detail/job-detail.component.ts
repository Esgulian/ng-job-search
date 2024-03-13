import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobsHttpService } from '../../service/jobs-http.service';
import { JobDetail } from './job-detail.modele';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormatStringPipe } from '../../pipe/format-string.pipe';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, FormatStringPipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css',
})
export class JobDetailComponent {
  idJob: string;
  jobDetail$!: Observable<JobDetail>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly jobsHttpService: JobsHttpService
  ) {
    this.idJob = this.route.snapshot.params['id'];
    this.jobDetail$ = this.jobsHttpService.getJobDetail(this.idJob);
  }
}
