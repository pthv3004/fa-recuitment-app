import { Component } from '@angular/core';
import { contact } from '../datas/contact';
import { scheduleList } from '../datas/schedules';
import { SortEvent } from 'primeng/api';
import { interviewers } from '../datas/interviews';
import { Interviewer } from './../datas/model/interviewer-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracking-interview-component',
  templateUrl: './tracking-interview-component.component.html',
  styleUrls: ['./tracking-interview-component.component.css']
})
export class TrackingInterviewComponentComponent {
  contact = contact;
  interviewer! : Interviewer;
  interviewerList!: Interviewer[];
  scheduleList = scheduleList;
  nextMeetingCount! : number;
  acceptCount!:number;
  rejectCount! : number;
  feedbackDialogVisible: boolean = false;
  textFeedback!: string;
  constructor(
    private route: ActivatedRoute,
  ){}
  ngOnInit() {
    this.interviewerList = interviewers;
    this.nextMeetingCount = this.checkOccurrence(this.interviewerList,"Pending");
    this.acceptCount = this.checkOccurrence(this.interviewerList,"Accept");
    this.rejectCount = this.checkOccurrence(this.interviewerList,"Cancel");
    this.getInteviewer();
  }
  getInteviewer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.interviewer = interviewers.find(({ Id }) => Id === id)
  }
  checkOccurrence = (array: Interviewer[], element: any) => {
    let counter = 0;
    for (const item of array.flat()) {
        if (item.Status == element) {
            counter++;
        }
    };
    return counter;
};
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
  goToDetail(id : any){
    window.location.href = '/interview-meeting-detail/' + id;
  }
  showFeedbackDialog() {
    this.feedbackDialogVisible = true;
}
}
