import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interviewer } from '../datas/model/interviewer-model';
import { interviewers } from '../datas/interviews';
import { contact } from '../datas/contact';

@Component({
  selector: 'app-cv-suggestion-detail-component',
  templateUrl: './cv-suggestion-detail-component.component.html',
  styleUrls: ['./cv-suggestion-detail-component.component.css']
})
export class CvSuggestionDetailComponentComponent {
  interviewer!: Interviewer;
  statusList!: string[];
  public contact = contact;
  selectedStatus: string | undefined;
  constructor(
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getInterview();
    this.statusList = ["Pending", "Accept", "Cancel"];
  }
  getInterview(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.interviewer = interviewers.find(({ Id }) => Id === id);
    this.selectedStatus = this.interviewer.Status;
  }
}
