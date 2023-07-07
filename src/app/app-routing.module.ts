import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuitmentManagementComponent } from './recuitment-management/recuitment-management.component';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { JobDescriptionComponent } from './job-description/job-description.component';

const routes: Routes = [
  { path: 'recuitment-management', component: RecuitmentManagementComponent },
  { path: '', redirectTo:'/recuitment-management', pathMatch:'full'},
  { path: 'interview-management/:jobId', component: InterviewManagementComponent },
  { path: 'job-description-detail/:id', component: JobDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
