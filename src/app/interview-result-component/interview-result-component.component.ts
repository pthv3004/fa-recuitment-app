import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interviewers } from '../datas/interviews';
@Component({
  selector: 'app-interview-result-component',
  templateUrl: './interview-result-component.component.html',
  styleUrls: ['./interview-result-component.component.css']
})
export class InterviewResultComponentComponent {
  listInterviewers = interviewers;
  public componentEvents: string[] = [];
  public editorData!:string;
  receiver!: string;
  subject!: string;
  visible = false;
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {

  }
  // getSchedule(): void {
  //   const scheduleID = Number(this.route.snapshot.paramMap.get('id'));
  //   this.schedule = this.scheduleList.find(({ Id }) => Id === scheduleID);
  // }
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
  showEmailDialog() {
    this.visible = true;
  }

  sendEmail(receiver: any,subject: any,editorData: any){
    console.log(receiver,subject,editorData)
    this.visible = false;
  }
}
