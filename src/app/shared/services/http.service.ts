import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

    constructor( private http: Http ) { }

    postData( url: string, payload: any, isJSON: boolean ): Observable<any> {
        let bodyString = JSON.stringify( payload );

        let headers: any;
        if ( isJSON ) {
            headers = new Headers( { 'Content-Type': 'application/json' });
        }

        let options = new RequestOptions( { headers: headers });

        return this.http.post( url, payload, options )
            .map(( res: Response ) => {
                let reponse: any;
                if ( isJSON ) {
                    reponse = res.json();
                } else {
                    reponse = res.text();
                }
                return reponse;
            })
            .catch( this.handleError );
    }

    getData( url: string, isJSON: boolean ): Observable<any> {
        return this.http.get( url )
            .map(( res: Response ) => {
                let reponse: any;
                if ( isJSON ) {
                    reponse = res.json();
                } else {
                    reponse = res.text();
                }
                return reponse;
            })
            .catch( this.handleError );
    }

    private handleError( error: any ) {
        let errMsg = ( error.message ) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error( 'errMsg in handleError : ', errMsg );
        return Observable.throw( errMsg );
    }

}