import { Component, OnInit } from '@angular/core';
import { ListeJobService } from '../../service/store/liste-job.service';
import { Job } from '../jobs/job.modele';
import { CommonModule } from '@angular/common';
import { JobResumeComponent } from '../../components/job-resume/job-resume.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, JobResumeComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  private destroy$: Subject<boolean> = new Subject();
  favoriteJobs: Job[] = [];

  constructor(readonly listeJobService: ListeJobService) {
    this.listeJobService.onListeJobPage.next(false);
  }

  ngOnInit(): void {
    this.getFavoriteJob();
  }

  private getFavoriteJob() {
    this.listeJobService
      .getListeFavorite()
      .pipe(takeUntil(this.destroy$))
      .subscribe((listeFavorite) => (this.favoriteJobs = listeFavorite));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
