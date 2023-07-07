import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecuitmentManagementComponent } from './recuitment-management/recuitment-management.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { IgxPaginatorModule, IgxRippleModule,IgxCardModule } from "igniteui-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { JobDescriptionComponent } from './job-description/job-description.component';
@NgModule({
  declarations: [
    AppComponent,
    RecuitmentManagementComponent,
    InterviewManagementComponent,
    JobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    IgxPaginatorModule,
    IgxRippleModule,
    IgxCardModule,
    PaginatorModule,
    ToggleButtonModule,
    DropdownModule,
    TableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
