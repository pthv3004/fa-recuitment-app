import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecuitmentManagementComponent } from './recuitment-management/recuitment-management.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { CvDetailComponentComponent } from './cv-detail-component/cv-detail-component.component';
import { PanelModule } from 'primeng/panel';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { CandidateDetailComponentComponent } from './candidate-detail-component/candidate-detail-component.component';
import { CvSuggestionComponentComponent } from './cv-suggestion-component/cv-suggestion-component.component';
import { CvSuggestionDetailComponentComponent } from './cv-suggestion-detail-component/cv-suggestion-detail-component.component';
import { AllInterviewerManagementComponentComponent } from './all-interviewer-management-component/all-interviewer-management-component.component';
import { InterviewerDetailComponentComponent } from './interviewer-detail-component/interviewer-detail-component.component';
import { TrackingInterviewComponentComponent } from './tracking-interview-component/tracking-interview-component.component';
import { InterviewMeetingDetailComponentComponent } from './interview-meeting-detail-component/interview-meeting-detail-component.component';
import { InterviewResultComponentComponent } from './interview-result-component/interview-result-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RecuitmentManagementComponent,
    InterviewManagementComponent,
    JobDescriptionComponent,
    CvDetailComponentComponent,
    CandidateManagementComponent,
    CandidateDetailComponentComponent,
    CvSuggestionComponentComponent,
    CvSuggestionDetailComponentComponent,
    AllInterviewerManagementComponentComponent,
    InterviewerDetailComponentComponent,
    TrackingInterviewComponentComponent,
    InterviewMeetingDetailComponentComponent,
    InterviewResultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    TabViewModule,
    PaginatorModule,
    ToggleButtonModule,
    DropdownModule,
    TableModule,
    PanelModule,
    DividerModule,
    TagModule,
    AccordionModule,
    ProgressBarModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    CKEditorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
