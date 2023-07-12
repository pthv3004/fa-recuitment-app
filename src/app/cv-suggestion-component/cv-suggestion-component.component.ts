import { Component } from '@angular/core';
import { Job } from '../datas/model/job-model';
import { JOB } from '../datas/job';
import { Interviewer } from '../datas/model/interviewer-model';
import { ActivatedRoute } from '@angular/router';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { interviewers } from './../datas/interviews';

@Component({
  selector: 'app-cv-suggestion-component',
  templateUrl: './cv-suggestion-component.component.html',
  styleUrls: ['./cv-suggestion-component.component.css']
})
export class CvSuggestionComponentComponent {
  public jobDatas = JOB;
  public job!: Job;
  public JobTitleList!: any[];
  public SkillList!: any[];
  public LocationList!: any[];
  listInterviewers!: Interviewer[];
  event: any;
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
    this.JobTitleList = interviewers.map((jobb) => jobb.JobTitle);
    this.LocationList = this.jobDatas.map((jobb) => jobb.Location);
    this.SkillList = [
      { label: 'Java', value: 'Java' },
      { label: 'React', value: 'React' },
      { label: 'C#', value: 'C#' },
      { label: 'Angular', value: 'Angular' },
      { label: 'Python', value: 'Python' },
      { label: 'Ruby', value: 'Ruby' }]
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
  clear(table: Table) {
    table.clear();
  }
  getSeverity(status: string) {
    switch (status) {
      case 'Pending':
        return 'warning';

      case 'Accept':
        return 'success';

      case 'Cancel':
        return 'danger';
      default:
        return '';
    }
  }
  goToDetail(id: number) {
    window.location.href = 'cv-suggestion/detail/' + id;
  }
}
