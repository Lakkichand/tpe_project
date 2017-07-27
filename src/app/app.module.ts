import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


//main component
import { AppComponent } from './app.component';


//services
import { HttpService } from './shared/services/http.service';
import { WindowService } from './shared/services/window.service';
import { AuthenticationService } from './shared/services/authentication.service'

//modules
import { AppRoutingModule } from './app.routing';
import { PaginationModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table';
import { ResponsiveModule } from 'ng2-responsive';
import { ModalModule } from "ng2-modal";

//components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TopbarComponent } from './component/layout/topbar/topbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { BarchartComponent } from './component/widget/barchart/barchart.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { InsightPatchComponent } from './component/widget/insight-patch/insight-patch.component';
import { LogReportsComponent } from './component/widget/log-reports/log-reports.component';
import { TableComponent } from './component/widget/table/table.component';
import { MultilineChartComponent } from './component/widget/multiline-chart/multiline-chart.component';
import { PieChartComponent } from './component/widget/pie-chart/pie-chart.component';



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
    LogReportsComponent,
    TableComponent,
    MultilineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ResponsiveModule,
    CommonModule,
    PaginationModule.forRoot(),
    TabsModule,
    Ng2TableModule,
    ModalModule,
  ],
  providers: [
    HttpService,
    WindowService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
