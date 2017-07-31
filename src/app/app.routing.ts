import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }   from './app.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';

const appRoutes: Routes = [
    { path: 'login',  component: LoginComponent },
    { path: '',  component: MainComponent }
];

@NgModule( {
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}