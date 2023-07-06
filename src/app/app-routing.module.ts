import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuitmentManagementComponent } from './recuitment-management/recuitment-management.component';
import { InterviewManagementComponent } from './interview-management/interview-management.component';

const routes: Routes = [
  { path: 'recuitment-management', component: RecuitmentManagementComponent },
  { path: 'interview-management', component: InterviewManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
