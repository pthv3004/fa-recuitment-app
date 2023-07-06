import { ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { JOB } from '../datas/job';
import { Job } from '../datas/job-model';
@Component({
  selector: 'app-recuitment-management',
  templateUrl: './recuitment-management.component.html',
  styleUrls: ['./recuitment-management.component.css']
})
export class RecuitmentManagementComponent implements OnInit {
  public jobsData: Job[] = [];
  public itemsPerPage = [3, 4, 5];
  public totalJobs = JOB;
  constructor(public cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.getData();
  }
  getData() {

    if (JOB.length > 8) {
      let jobs = JOB.slice(0,8);
      this.jobsData = jobs;
    } else {
      this.jobsData = JOB;
    }

  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  paginate(event: any) {
    console.log(event);
      let jobs = this.totalJobs.slice(event.first,event.first + event.rows)
      this.jobsData = jobs;
      console.log(this.jobsData);
  }
  //event.first = Index of the first record
  //event.rows = Number of rows to display in new page
  //event.page = Index of the new page
  //event.pageCount = Total number of pages
}
