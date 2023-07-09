import { Component } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Interviewer } from '../datas/model/interviewer-model';
import { interviewers } from '../datas/interviews';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../datas/model/job-model';
import { JOB } from '../datas/job';
@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.css']
})
export class CandidateManagementComponent {
  public job!: Job;
  jobDatas = JOB;
  listInterviewers!: Interviewer[];
  constructor(
    private route: ActivatedRoute,
  ){}


  ngOnInit() {
    this.listInterviewers = interviewers;
  }
  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('jobId'));
    this.job = this.jobDatas.find(({ JobID }) => JobID === id)
    console.log(this.job);
  }
  customSort(event: SortEvent) {
    event.data!.sort((data1, data2 ) => {
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
}
