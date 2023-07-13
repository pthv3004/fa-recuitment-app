import { ChangeDetectorRef, Component } from '@angular/core';
import { Interviewer } from './../datas/model/interviewer-model';
import { interviewers } from '../datas/interviews';

@Component({
  selector: 'app-all-interviewer-management-component',
  templateUrl: './all-interviewer-management-component.component.html',
  styleUrls: ['./all-interviewer-management-component.component.css']
})
export class AllInterviewerManagementComponentComponent {
  public InterviewerList: Interviewer[] = [];
  public itemsPerPage = [3,6,9];
  public totalInterviewer = interviewers;
  constructor(public cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.getData();
  }
  getData() {

    if (interviewers.length > 9) {
      let interviews = interviewers.slice(0,9);
      this.InterviewerList = interviews;
    } else {
      this.InterviewerList = interviewers;
    }

  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  paginate(event: any) {
    console.log(event);
      let interviews = this.totalInterviewer.slice(event.first,event.first + event.rows)
      this.InterviewerList = interviews;
      console.log(this.InterviewerList);
  }
  // goToDetail(job : any){
  //   window.location.href = '/job-description-detail/' + job.JobID;
  // }
}
