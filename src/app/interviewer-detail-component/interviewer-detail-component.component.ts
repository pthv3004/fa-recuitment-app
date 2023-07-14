import { Component } from '@angular/core';
import { Interviewer } from '../datas/model/interviewer-model';
import { ActivatedRoute } from '@angular/router';
import { interviewers } from '../datas/interviews';
import { contact } from '../datas/contact';
import { scheduleList } from '../datas/schedules';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-interviewer-detail-component',
  templateUrl: './interviewer-detail-component.component.html',
  styleUrls: ['./interviewer-detail-component.component.css']
})
export class InterviewerDetailComponentComponent {
  contact = contact;
  interviewer!: Interviewer;
  scheduleList = scheduleList;
  constructor(
    private route: ActivatedRoute,
  ){}
  ngOnInit() {
    this.getInteviewer();
  }
  getInteviewer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.interviewer = interviewers.find(({ Id }) => Id === id)
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
