import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListeJobState, ListeJobStore } from './liste-job.store';

@Injectable({ providedIn: 'root' })
export class ListeJobQuery extends QueryEntity<ListeJobState> {
  listeJob$ = this.selectAll();
  listeFavorite$ = this.selectAll({
    filterBy: (job) => job.isFavorite === true,
  });

  constructor(protected override store: ListeJobStore) {
    super(store);
  }
}
