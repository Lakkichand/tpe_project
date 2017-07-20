import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveModule } from 'ng2-responsive'

//main component
import { AppComponent } from './app.component';


//services
import { HttpService } from './shared/services/http.service';
import { WindowService } from './shared/services/window.service';
import { AuthenticationService } from './shared/services/authentication.service'

//routing Module
import { AppRoutingModule } from './app.routing';

//components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TopbarComponent } from './component/layout/topbar/topbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { D3Service } from 'd3-ng2-service';
import { BarchartComponent } from './component/widget/barchart/barchart.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { InsightPatchComponent } from './component/widget/insight-patch/insight-patch.component';
import { LogReportsComponent } from './component/widget/log-reports/log-reports.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    BarchartComponent,
    MainComponent,
    LoginComponent,
    InsightPatchComponent,
    LogReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ResponsiveModule
  ],
  providers: [
    HttpService,
    WindowService,
    D3Service,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
