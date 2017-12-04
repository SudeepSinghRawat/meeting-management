import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNavBarComponent } from './my-nav-bar/my-nav-bar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyNavBarComponent,
    DashbordComponent,
    AddMeetingComponent,
    AddTaskComponent,
    MeetingListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
