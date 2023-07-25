import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JOB } from '../datas/job';
import { Job } from '../datas/model/job-model';
@Component({
  selector: 'app-recuitment-management',
  templateUrl: './recuitment-management.component.html',
  styleUrls: ['./recuitment-management.component.css']
})
export class RecuitmentManagementComponent implements OnInit {
  public jobsData: Job[] = [];
  public itemsPerPage = [3, 4, 5];
  public totalJobs = JOB;
  dialogVisible: boolean = false;
  editDialogVisible: boolean = false;
  // data of diaglog
  public newJob!: Job;
  editData!: Job;

  //data of new Job:
  newJobID!: number;
  newJobTitle!: string;
  newSalary!: number;
  newCompanyName!: string;
  newTimeOut!: Date;
  newJobDescription!: string;
  newJobRequirement!: string;
  newLocation!: string;
  newContact!: string;
  newBenefit!: string;
  newExperience!: string;
  constructor(public cdr: ChangeDetectorRef) {
  }
  ngOnInit() {
    this.editData = {
      JobID: 0,
      JobTitle: "",
      Salary: 0,
      CompanyName: "",
      TimeOut: new Date("2023-07-27"),
      JobDescription: "",
      JobRequirement: "",
      Location: "",
      Contact: "",
    }
    this.getData();
  }
  getData() {

    if (JOB.length > 8) {
      let jobs = JOB.slice(0, 8);
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
    let jobs = this.totalJobs.slice(event.first, event.first + event.rows)
    this.jobsData = jobs;
    console.log(this.jobsData);
  }
  goToDetail(job: Job) {
    window.location.href = '/job-description-detail/' + job.JobID;
  }
  showDialog() {
    this.dialogVisible = true;
  }
  createNewJob() {
    this.dialogVisible = false;
  }
  showEditDialog(job: Job) {
    console.log(job);
    this.editData = job;
    this.editDialogVisible = true;
  }
  updateJob(editData: any) {
    console.log(editData);

    this.editDialogVisible = false;
  }
}
