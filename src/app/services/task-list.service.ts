import { Injectable } from '@angular/core';
import { AppConfig } from '../configs/app.config';
import { GoogleApiService } from './google-api.service';

@Injectable()
export class TaskListService {
    
    
    private request = 'tasks/v1/users/@me/lists';
    
    constructor(private GoogleAPI:GoogleApiService) { }
    
    get(id?){
        id = id ? `/${id}` : ``;
        return this.GoogleAPI.request({
          'path': `${AppConfig.googleTask.SCOPES}/${this.request}${id}`
        });
    }


}
