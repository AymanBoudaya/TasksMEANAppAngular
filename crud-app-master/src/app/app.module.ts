import '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { EmpAddEditComponent } from './components/emp-add-edit/emp-add-edit.component';
import { SharedModule } from './components/shared/shared.module';
import { baseURL } from './shared/baseUrl';


@NgModule({
  declarations: [AppComponent, EmpAddEditComponent, LoginComponent, HomeComponent, TasksComponent, WorkDashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    SharedModule
  ],
  providers: [{provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent],
})
export class AppModule { }
