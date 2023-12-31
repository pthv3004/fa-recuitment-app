import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuitmentManagementComponent } from './recuitment-management/recuitment-management.component';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { CvDetailComponentComponent } from './cv-detail-component/cv-detail-component.component';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { CandidateDetailComponentComponent } from './candidate-detail-component/candidate-detail-component.component';
import { CvSuggestionComponentComponent } from './cv-suggestion-component/cv-suggestion-component.component';
import { CvSuggestionDetailComponentComponent } from './cv-suggestion-detail-component/cv-suggestion-detail-component.component';
import { AllInterviewerManagementComponentComponent } from './all-interviewer-management-component/all-interviewer-management-component.component';
import { InterviewerDetailComponentComponent } from './interviewer-detail-component/interviewer-detail-component.component';
import { TrackingInterviewComponentComponent } from './tracking-interview-component/tracking-interview-component.component';
import { InterviewMeetingDetailComponentComponent } from './interview-meeting-detail-component/interview-meeting-detail-component.component';
import { InterviewResultComponentComponent } from './interview-result-component/interview-result-component.component';
const routes: Routes = [
  { path: 'recuitment-management', component: RecuitmentManagementComponent },
  { path: '', redirectTo: '/recuitment-management', pathMatch: 'full' },
  { path: 'interview-management/:jobId', component: InterviewManagementComponent },
  { path: 'candidate-management/:jobId', component: CandidateManagementComponent },
  { path: 'job-description-detail/:id', component: JobDescriptionComponent },
  { path: 'cv-detail/:id', component: CvDetailComponentComponent },
  { path: 'candidate-detail/:id', component: CandidateDetailComponentComponent },
  { path: 'cv-suggestion/:id', component: CvSuggestionComponentComponent },
  { path: 'cv-suggestion/detail/:id', component: CvSuggestionDetailComponentComponent },
  { path: 'all-interviewer-management', component: AllInterviewerManagementComponentComponent},
  { path: 'interviewer-detail/:id', component: InterviewerDetailComponentComponent},
  { path: 'tracking-interview/:id', component: TrackingInterviewComponentComponent},
  { path: 'interview-meeting-detail/:id', component: InterviewMeetingDetailComponentComponent},
  { path: 'interview-result/:id', component: InterviewResultComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
