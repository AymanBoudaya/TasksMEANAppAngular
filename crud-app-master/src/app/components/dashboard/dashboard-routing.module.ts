import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from '../tasks/tasks.component';
import { HomeComponent } from '../home/home.component';
import { WorkDashboardComponent } from 'src/app/work-dashboard/work-dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children: [
    {path:'dashboard', component:WorkDashboardComponent},
    {path: 'tasks', component:TasksComponent},
    {path:'home', component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
