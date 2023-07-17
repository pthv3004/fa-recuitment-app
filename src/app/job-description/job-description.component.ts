import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOB } from '../datas/job';
import { Job } from '../datas/model/job-model';
import { SortEvent } from 'primeng/api';
import { Interviewer } from '../datas/model/interviewer-model';
import { interviewers } from '../datas/interviews';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent {
  public jobDatas = JOB;
  public job!: Job;
  listInterviewers!: Interviewer[];
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.listInterviewers = interviewers;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getJob();
  }
  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobDatas.find(({ JobID }) => JobID === id)
    console.log(this.job);
  }
  customSort(event: SortEvent) {
    event.data!.sort((data1, data2) => {
      let value1 = data1[event.field!];
      let value2 = data2[event.field!];
      let result = null;
      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      return event.order! * result;
    });
  }
  goToInterviewer(job: Job) {
    window.location.href = '/interview-management/' + job.JobID;
  }
  goToDetail(Id: number) {
    window.location.href = '/cv-detail/' + Id;
  }
  goToCandidate(job: Job) {
    window.location.href = '/candidate-management/' + job.JobID;
  }
  goToCvSuggestion(job:Job){
    window.location.href = '/cv-suggestion/' + job.JobID;
  }
  goToInterviewerTracking(job:Job){
    window.location.href = '/tracking-interview/' + job.JobID;
  }
}
