import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StdDashboardComponent } from './std-dashboard/std-dashboard.component';
import { TodoDashComponent } from './todo-dash/todo-dash.component';

const routes:Routes=[
{
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path:'todo',
    component:TodoDashComponent
  },
   {
    path:'student',
    component:StdDashboardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
