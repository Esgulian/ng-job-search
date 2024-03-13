import { Component, Input } from '@angular/core';
import { Job } from '../../views/jobs/job.modele';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListeJobService } from '../../service/store/liste-job.service';

@Component({
  selector: 'app-job-resume',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-resume.component.html',
  styleUrl: './job-resume.component.css',
})
export class JobResumeComponent {
  @Input() job!: Job;
  @Input() showToggleFavorite = true;

  constructor(private readonly listeJobService: ListeJobService) {}

  toggleFavorite(): void {
    const job: Job = {
      ...this.job,
      isFavorite: !(this.job.isFavorite != false),
    };
    this.listeJobService.updateJobToListJob(job);
  }
}
