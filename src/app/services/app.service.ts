import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    authDetails:any;
  constructor(private http:Http) { 
      
  }

    
    getTaskList(): any{
        return gapi.client.request({
            'path':'https://www.googleapis.com/tasks/v1/users/@me/lists'
        });
    }
};