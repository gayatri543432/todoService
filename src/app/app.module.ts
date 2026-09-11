import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashComponent } from './shared/component/todo-dash/todo-dash.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { MaterialModule } from './shared/material/material/material.module';
import { StdDashboardComponent } from './shared/component/std-dashboard/std-dashboard.component';
import { StdListComponent } from './shared/component/std-list/std-list.component';
import { StdFormComponent } from './shared/component/std-form/std-form.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRoutingModule } from './shared/component/app-routing.module';
import { StdGetConfirmComponent } from './shared/component/std-get-confirm/std-get-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    StdDashboardComponent,
    StdListComponent,
    StdFormComponent,
    NavbarComponent,
    StdGetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
