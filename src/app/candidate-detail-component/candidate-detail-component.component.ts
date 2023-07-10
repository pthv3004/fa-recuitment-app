import { Component } from '@angular/core';
import { Interviewer } from '../datas/model/interviewer-model';
import { ActivatedRoute } from '@angular/router';
import { interviewers } from '../datas/interviews';

@Component({
  selector: 'app-candidate-detail-component',
  templateUrl: './candidate-detail-component.component.html',
  styleUrls: ['./candidate-detail-component.component.css']
})
export class CandidateDetailComponentComponent {

  interviewer!: Interviewer;
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
}
