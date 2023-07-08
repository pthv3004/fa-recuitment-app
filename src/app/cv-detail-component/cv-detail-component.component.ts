import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interviewer } from '../datas/model/interviewer-model';
import { interviewers } from './../datas/interviews';
import { contact } from '../datas/contact';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-cv-detail-component',
  templateUrl: './cv-detail-component.component.html',
  styleUrls: ['./cv-detail-component.component.css']
})
export class CvDetailComponentComponent {
  public interviewer!: Interviewer;
  public interviewerList = interviewers;
  public contact = contact;
  statusList! : string [] ;

  selectedStatus: string | undefined;
  constructor(
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getInteviewer();
    this.statusList =  ["Pending", "Accept", "Cancel"];
  }
  getInteviewer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.interviewer = this.interviewerList.find(({ Id }) => Id === id);
    this.selectedStatus = this.interviewer.Status;
    console.log(this.interviewer);
  }
}
