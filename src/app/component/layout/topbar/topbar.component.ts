import { Component } from '@angular/core';
import { TopbarConstant } from './topbar.constant';
import { HttpService } from '../../../shared/services/http.service';
import { KeycloakService } from '../../../shared/services/keycloak.service';
import { UserDetailService } from '../../../shared/services/user-detail.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['../../../app.component.css']
})
export class TopbarComponent {

  topbarConst: any;
  locationData: any;
  whatTime: any;
  temp: any;
  temp_condtion: any;

  constructor(private httpService: HttpService,
    private KeycloakService: KeycloakService,
    private userDetailService: UserDetailService) {
    this.topbarConst = TopbarConstant;

    this.locationData = {
      name: 'Cender falls Complex',
      area: 'Santa Clara',
      country: 'CA',
      pincode: 95054
    }

    this.whatTime = Observable.interval(1000).map(x => new Date()).share();
    //  console.log('username :',this.userDetailService.userDetails );

    this.httpService.getData('http://api.wunderground.com/api/32f9925b5a4931b4/forecast/q/CA/95054.json', true)
      .subscribe(
      data => {
        // console.log('data in get server message: ', data);
        this.temp=data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
        this.temp_condtion=data.forecast.simpleforecast.forecastday[0].conditions;
      },
      error => {
        console.log('on error in get server message: ', error);

      },
    );

  }

  signout() {
    KeycloakService.logout();
  }


}
