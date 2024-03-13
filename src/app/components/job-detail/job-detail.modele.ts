import { Job } from '../../views/jobs/job.modele';

export interface JobDetail extends Job {
  location: string;
  industries: string[];
  types: string[];
  description: string;
  publishDate: string;
}
