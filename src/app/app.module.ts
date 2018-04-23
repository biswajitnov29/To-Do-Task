import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskListsComponent } from './components/task-lists/task-lists.component';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { DefaultTasksComponent } from './components/default-tasks/default-tasks.component';

import { AppService } from './services/app.service';
import { TaskService } from './services/task.service';
import { TaskListService } from './services/task-list.service';
import { WindowRefService } from './services/window-ref.service';
import { GoogleApiService } from './services/google-api.service';
import { AuthService } from "./services/auth.service";
import { AuthResolveService } from './services/auth-resolve.service';
import { ToastService } from './services/toast.service';
import { ReversePipe } from './filters/reverse.pipe';

const routes: Routes = [
  {
      path: '',
      component: DefaultTasksComponent,
      resolve: {
          data: AuthResolveService
      },
  },{
      path: 'tasklist/:id/tasks',
      component: TasksComponent,
      resolve: {
          data: AuthResolveService
      },
  },
  {
      path: 'login',
      component: LoginComponent,
      resolve: {
          data: AuthResolveService
      },
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    TaskListsComponent,
    ToastMessagesComponent,
    ReversePipe,
    DefaultTasksComponent
  ],
  imports: [
    BrowserModule,
      CommonModule,
      HttpModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
      AppService,
      WindowRefService,
      GoogleApiService,
      AuthService,
      AuthResolveService,
      ToastService,
      TaskService,
      TaskListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
