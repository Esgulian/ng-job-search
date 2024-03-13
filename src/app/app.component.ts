import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { ListeJobService } from './service/store/liste-job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-job-search';

  constructor(readonly listeJobService: ListeJobService) {
    setTheme('bs5');
  }
}
