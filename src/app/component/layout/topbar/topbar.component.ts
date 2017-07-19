import { Component } from '@angular/core';
import { TopbarConstant } from './topbar.constant';
import { HttpService } from '../../../shared/services/http.service';



@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
 
   topbarConst: any;

   constructor( private httpService: HttpService ) {
        this.topbarConst = TopbarConstant;
    }
}
