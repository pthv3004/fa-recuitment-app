import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interviewer } from '../datas/model/interviewer-model';
import { interviewers } from '../datas/interviews';
import { scheduleList } from '../datas/schedules';
import { Schedule } from '../datas/model/schedule-model';

@Component({
  selector: 'app-interview-meeting-detail-component',
  templateUrl: './interview-meeting-detail-component.component.html',
  styleUrls: ['./interview-meeting-detail-component.component.css']
})
export class InterviewMeetingDetailComponentComponent {
  interviewerList!: Interviewer[];
  schedule!: Schedule;
  scheduleList = scheduleList;
  editDialogVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.interviewerList = interviewers.slice(0, 3);
    this.getSchedule();
  }
  getSchedule(): void {
    const scheduleID = Number(this.route.snapshot.paramMap.get('id'));
    this.schedule = this.scheduleList.find(({ Id }) => Id === scheduleID);
  }
  getSeverity(status: string) {
    switch (status) {
      case 'Processing':
        return 'primary';

      case 'Done':
        return 'success';

      case 'Reject':
        return 'danger';
      default:
        return '';
    }
  }

  showEditDialog() {
    this.editDialogVisible = true;
  }
  interviewResult(id: Number) {
    window.location.href ='interview-result/'+ id;
  }
}
